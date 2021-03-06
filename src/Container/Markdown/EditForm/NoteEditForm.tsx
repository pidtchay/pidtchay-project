import { Row, Col, Button, Typography, Switch, Modal, Input } from 'antd';
import moment from 'moment';
import React, { useContext, useRef, useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { DATE_TIME_FORMAT } from 'Constants/Common';
import { ActionsPanel } from 'Container/Markdown/ActionsPanel';
import { INotesSectionData } from 'Container/Markdown/Models';
import MarkdownNoteContext from 'Container/Markdown/NotesContext';
import styles from 'Style/MarkdownEditor/MarkdowInput.less';
import { openNotificationWithIcon, convertStringArrayToString } from 'Utils/common';
import { useLiteralValue } from 'Utils/hooks';
import { useCryptoAES256 } from 'Utils/useCryproAES256';
import { EFormStep } from '../enums';
import { useTextAreaState, useNotePassword, useNoteContext } from '../hooks';

const { Title } = Typography;

export const NoteEditForm = () => {
    // Context
    const { currentNote, step } = useContext<INotesSectionData>(MarkdownNoteContext);
    // Hooks
    const { textareaRef, getLastState, getState, setState, setStateSyntax, processChange, processChangeSyntax } = useTextAreaState(currentNote);
    const { passwd, isPasswordEnable, changePassword, verifyPassword, togglePasswordEnable } = useNotePassword();
    const { encryptMessage, decryptMessage, isEncryptedMessage, isDecryptedMessage, toggleEngrypted, toggleDecrypted } = useCryptoAES256();
    const { getValue: getLiteralValue } = useLiteralValue();
    const { setNoteText, update: updateNote, setCurrentNote, create: createNote, setNextStep } = useNoteContext();

    const [visible, setVisible] = useState(false);

    const createDate = useRef(currentNote ? currentNote.createDate : moment(new Date()).format(DATE_TIME_FORMAT));
    const { noteText, noteTitle } = getState();

    useEffect(() => {
        if (noteText && isEncryptedMessage) {
            saveNote();
        }
    }, [isEncryptedMessage]);

    useEffect(() => {
        if (step !== EFormStep.LIST) {
            setNoteText(noteText);
        } else {
            setNoteText('');
        }
    }, [noteText, step]);
    /**
     * Processes the input text and captures the value.
     *
     * @param {string} [value] - New value.
     */
    const handleChange = (value: string) => {
        const currentState = getState();
        const previousState = getLastState();
        const state = processChange(currentState, previousState);
        setState(state.selection, value);
    };

    /**
     * Processes input syntax with text and captures the value.
     *
     * @param {string} [syntaxValue] - Markdown syntax key.
     */
    const handleChangeSyntax = (syntaxValue: string) => {
        const currentState = getState();
        const previousState = getLastState();
        const state = processChangeSyntax(currentState, previousState, syntaxValue);

        setStateSyntax(state.selection, state.noteText, state.noteSyntax);
        textareaRef.current && textareaRef.current.focus();
    };

    const handleModalSubmit = () => {
        if (currentNote?.isEncrypted && !isDecryptedMessage) {
            handleDecryptMessage();
        } else {
            handleEncryptMessage();
        }
    };

    const handleDecryptMessage = () => {
        if (verifyPassword()) {
            decryptMessage(noteText, passwd).then((decrypted) => {
                if (decrypted) {
                    const cursorPosition = decrypted.length;
                    setState({ start: cursorPosition, end: cursorPosition }, decrypted);
                    setNoteText(decrypted);
                    toggleDecrypted();
                    tooglePasswdModalVisible();
                } else {
                    openNotificationWithIcon({
                        description: convertStringArrayToString(getLiteralValue('Notification.crypto.incorrectPasswd.description')),
                        title: convertStringArrayToString(getLiteralValue('Notification.crypto.incorrectPasswd.title')),
                        type: 'error'
                    });
                }
            });
        }
    };

    const handleEncryptMessage = () => {
        if (verifyPassword()) {
            encryptMessage(noteText, passwd).then((encrypted) => {
                const cursorPosition = encrypted.length;
                setState({ start: cursorPosition, end: cursorPosition }, encrypted);
                toggleEngrypted();
            });
        }
    };

    const saveNote = () => {
        if (!noteText) {
            return;
        }
        if (currentNote) {
            updateNote({
                ...currentNote,
                text: noteText,
                isEncrypted: isEncryptedMessage,
                title: noteText.split('\n')[0]
            });
            setCurrentNote(null);
        } else {
            createNote({
                id: uuid(),
                createDate: createDate.current,
                title: noteTitle || noteText.split('\n')[0],
                text: noteText,
                isEncrypted: isEncryptedMessage
            });
        }
        tooglePasswdModalVisible();
        setNextStep(EFormStep.LIST);
    };
    const tooglePasswdModalVisible = () => setVisible(!visible);

    const handleCancel = () => {
        setNoteText('');
        setCurrentNote(null);
        setNextStep(EFormStep.LIST);
    };

    return (
        <Col span={10}>
            <Row gutter={[16, 16]}>
                <Title level={2}>{getLiteralValue('Pages.Markdown.MarkdownInput.title')}</Title>
            </Row>
            <Row gutter={[16, 16]}>
                <Col>{`${getLiteralValue('Pages.Markdown.MarkdownInput.createDate')}${createDate.current}`}</Col>
            </Row>
            <ActionsPanel onSetTextValue={handleChangeSyntax} />
            <Row gutter={[16, 16]}>
                <textarea className={styles.markdownInput} ref={textareaRef} value={noteText} rows={10} onChange={(e) => handleChange(e.target.value)} />
            </Row>
            {((!currentNote && !isDecryptedMessage) || (currentNote?.isEncrypted && isDecryptedMessage) || (!currentNote?.isEncrypted && !isDecryptedMessage)) && (
                <Row gutter={[16, 16]}>
                    <Col>
                        <Switch onChange={togglePasswordEnable} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} checked={isPasswordEnable} />
                    </Col>
                </Row>
            )}
            <Row gutter={[16, 16]}>
                <Col>
                    <Button type="primary" onClick={isPasswordEnable ? tooglePasswdModalVisible : saveNote}>
                        {getLiteralValue('ACTIONS.save')}
                    </Button>
                </Col>
                <Col>
                    <Button onClick={handleCancel}>{getLiteralValue('ACTIONS.cancel')}</Button>
                </Col>
                {currentNote?.isEncrypted && !isDecryptedMessage && (
                    <Col>
                        <Button onClick={tooglePasswdModalVisible}>Decrypt</Button>
                    </Col>
                )}
            </Row>
            <Row>
                <Modal title={getLiteralValue('Pages.Markdown.MarkdownInput.Note.passPhrase.title')} visible={visible} onOk={handleModalSubmit} onCancel={tooglePasswdModalVisible}>
                    <Input.Password onChange={(e) => changePassword(e.target.value)} placeholder={convertStringArrayToString(getLiteralValue('Pages.Markdown.MarkdownInput.Note.passPhrase.placeholder'))} />
                </Modal>
            </Row>
        </Col>
    );
};

NoteEditForm.displayName = 'MarkdownNoteEdit';
