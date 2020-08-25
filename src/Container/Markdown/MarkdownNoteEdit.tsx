import { Row, Col, Button, Typography, Switch, Modal, Input } from 'antd';
import moment from 'moment';
import React, { useContext, useRef, useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { DATE_TIME_FORMAT } from 'Constants/Common';
import { ActionsPanel } from 'Container/Markdown/ActionsPanel';
import MarkdownNoteContext from 'Container/Markdown/MarkdownContext';
import { IMarkdownNoteContext } from 'Container/Markdown/Models';
import { EMarkdownStep } from 'Container/Markdown/enums';
import { setMarkdownText, updateNote, setCurrentNote, createNote, setMarkdownStep } from 'Store/markdown_notes/actions';
import styles from 'Style/MarkdownEditor/MarkdowInput.less';
import { openNotificationWithIcon, convertStringArrayToString } from 'Utils/common';
import { useLiteralValue } from 'Utils/hooks';
import { useCryptoAES256 } from 'Utils/useCryproAES256';
import { useMarkdownNoteEdit, useSelection } from './hooks';
import { getSpacesInSyntax } from './utils';

const { Title } = Typography;

export const MarkdownNoteEdit = () => {
    const { getValue: getLiteralValue } = useLiteralValue();
    const { currentNote, dispatch } = useContext<IMarkdownNoteContext>(MarkdownNoteContext);

    // Refs
    const textareaRef = useRef<HTMLTextAreaElement>();
    const createDate = useRef(currentNote ? currentNote.createDate : moment(new Date()).format(DATE_TIME_FORMAT));

    // Custom hooks
    const { setSelection } = useSelection(textareaRef);
    const { noteText, currentSyntax, title, changeValue, changeMarkdownSyntax } = useMarkdownNoteEdit(currentNote);
    const { encryptMessage, decryptMessage } = useCryptoAES256();

    // Component state
    const [passwd, setPasswd] = useState('');
    const [visible, setVisible] = useState(false);
    const [isEncrypt, setEncryptFlag] = useState(false);
    const [isEncrypted, setEncrypted] = useState(false);
    const [isDecrypted, setDecrypted] = useState(false);

    useEffect(() => {
        if (!textareaRef || !textareaRef.current) {
            return;
        }
        const { selectionStart, selectionEnd } = textareaRef.current;
        const spaces = getSpacesInSyntax(currentSyntax);

        if (spaces.type === 'plus') {
            setSelection({
                start: selectionStart + spaces.spaces,
                end: selectionEnd + spaces.spaces
            });
        } else {
            setSelection({
                start: selectionStart - spaces.spaces,
                end: selectionEnd - spaces.spaces
            });
        }

        textareaRef.current.focus();
    }, [noteText, currentSyntax]);

    useEffect(() => {
        if (isEncrypted) {
            handleSaveNote();
        }
    }, [isEncrypted, noteText]);

    const handleSaveNote = () => {
        if (currentNote) {
            dispatch(updateNote(noteText));
            dispatch(setCurrentNote(null));
        } else {
            dispatch(
                createNote({
                    id: uuid(),
                    createDate: createDate.current,
                    title: title || noteText.split('\n')[0],
                    text: noteText,
                    isEncrypted: isEncrypted
                })
            );
        }

        dispatch(setMarkdownStep(EMarkdownStep.LIST));
        dispatch(setMarkdownText(''));
    };

    const handleEncryptChange = () => setEncryptFlag(!isEncrypt);

    const handleEncrypt = () => {
        encryptMessage(noteText, passwd).then((encrypted) => {
            changeValue(encrypted);
            setEncrypted(!isEncrypted);
        });
    };

    const handleDecrypt = () => {
        decryptMessage(noteText, passwd).then((decrypted) => {
            if (decrypted && decrypted !== '') {
                changeValue(decrypted);
                dispatch(setMarkdownText(decrypted));
                setDecrypted(!isDecrypted);
            } else {
                openNotificationWithIcon({
                    description: convertStringArrayToString(getLiteralValue('Notification.crypto.description')),
                    title: convertStringArrayToString(getLiteralValue('Notification.crypto.title')),
                    type: 'error'
                });
            }
        });
    };

    const handleInputChange = (value: string) => {
        changeValue(value);
        dispatch(setMarkdownText(value));
    };
    const handleOk = () => {
        if (!passwd) {
            openNotificationWithIcon({
                description: convertStringArrayToString(getLiteralValue('Notification.passPhrase.description')),
                title: convertStringArrayToString(getLiteralValue('Notification.passPhrase.title')),
                type: 'error'
            });
            return;
        }
        if (!isDecrypted && currentNote?.isEncrypted) {
            handleDecrypt();
        } else {
            handleEncrypt();
        }
        setVisible(false);
    };

    const handleCancel = () => setVisible(false);

    const showModal = () => setVisible(true);

    return (
        <Col span={10}>
            <Row gutter={[16, 16]}>
                <Title level={2}>{getLiteralValue('Pages.Markdown.MarkdownInput.title')}</Title>
            </Row>
            <Row gutter={[16, 16]}>
                <Col>{`${getLiteralValue('Pages.Markdown.MarkdownInput.createDate')}${createDate.current}`}</Col>
            </Row>
            <ActionsPanel onSetTextValue={changeMarkdownSyntax} />
            <Row gutter={[16, 16]}>
                <textarea className={styles.markdownInput} ref={textareaRef} value={noteText} rows={10} onChange={(e) => handleInputChange(e.target.value)} />
            </Row>
            <Row gutter={[16, 16]}>
                <Col>
                    <Switch onChange={handleEncryptChange} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} checked={isEncrypt} />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col>
                    <Button type="primary" onClick={isEncrypt ? showModal : handleSaveNote}>
                        {getLiteralValue('ACTIONS.save')}
                    </Button>
                </Col>
                {currentNote?.isEncrypted && !isDecrypted && (
                    <Col>
                        <Button onClick={showModal}>Decrypt</Button>
                    </Col>
                )}
            </Row>
            <Row>
                <Modal title={getLiteralValue('Pages.Markdown.MarkdownInput.Note.passPhrase.title')} visible={visible} onOk={handleOk} onCancel={handleCancel}>
                    <Input.Password onChange={(e) => setPasswd(e.target.value)} placeholder={convertStringArrayToString(getLiteralValue('Pages.Markdown.MarkdownInput.Note.passPhrase.placeholder'))} />
                </Modal>
            </Row>
        </Col>
    );
};

MarkdownNoteEdit.displayName = 'MarkdownNoteEdit';
