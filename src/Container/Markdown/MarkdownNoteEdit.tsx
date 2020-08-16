import { Row, Col, Button, Typography, Switch, Modal, Input } from 'antd';
import moment from 'moment';
import React, { useContext, useRef, useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { DATE_TIME_FORMAT } from 'Constants/Common';
import { ActionsPanel } from 'Container/Markdown/ActionsPanel';
import MarkdownNoteContext from 'Container/Markdown/Context';
import { IMarkdownNoteContext } from 'Container/Markdown/Models';
import { EMarkdownStep } from 'Container/Markdown/enums';
import { useSelection } from 'Container/Markdown/hooks';
import { getSpacesInSyntax } from 'Container/Markdown/utils';
import { setMarkdownText, updateNote, setCurrentNote, createNote, setMarkdownStep } from 'Store/markdown_notes/actions';
import styles from 'Style/MarkdownEditor/MarkdowInput.less';
import { openNotificationWithIcon } from 'Utils/common';
import { useLiteralValue } from 'Utils/hooks';
import { useCryptoAES256 } from 'Utils/useCryproAES256';

const { Title } = Typography;

export const MarkdownNoteEdit = () => {
    const myRef = useRef<HTMLTextAreaElement>();

    const { getValue: getLiteralValue } = useLiteralValue();

    const { setSelection } = useSelection(myRef);

    const { currentNote, dispatch } = useContext<IMarkdownNoteContext>(MarkdownNoteContext);

    const createDate = useRef(currentNote ? currentNote.createDate : moment(new Date()).format(DATE_TIME_FORMAT));

    const { encryptMessage, decryptMessage } = useCryptoAES256();

    const [passwd, setPasswd] = useState('');
    const [visible, setVisible] = useState(false);
    const [isEncrypt, setEncryptFlag] = useState(false);
    const [isEncrypted, setEncrypted] = useState(false);
    const [isDecrypted, setDecrypted] = useState(false);
    const [textArea, setTextArea] = useState(currentNote ? currentNote.text : '');
    const [currentSyntax, setCurrentSyntax] = useState('');

    useEffect(() => {
        if (!myRef || !myRef.current) {
            return;
        }
        const { selectionStart, selectionEnd } = myRef.current;
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

        myRef.current.focus();
    }, [myRef]);

    const handleInputChange = (value: string) => {
        changeValue(value);
    };

    const changeValue = (value: string, syntax = '') => {
        setTextArea(value);
        setCurrentSyntax(syntax);
        dispatch(setMarkdownText(value));
    };

    const handleAddMarkdownSynt = (value: string) => {
        const noteText = `${textArea}${value}`;
        changeValue(noteText, value);
    };

    const handleSaveNote = () => {
        if (currentNote) {
            dispatch(updateNote(textArea));
            dispatch(setCurrentNote(null));
        } else {
            dispatch(
                createNote({
                    id: uuid(),
                    createDate: createDate.current,
                    title: textArea.split('\n')[0],
                    text: textArea,
                    isEncrypted: isEncrypted
                })
            );
        }

        dispatch(setMarkdownStep(EMarkdownStep.LIST));
        dispatch(setMarkdownText(''));
    };

    const handleEncryptChange = () => setEncryptFlag(!isEncrypt);

    const handleEncrypt = () => {
        encryptMessage(textArea, passwd).then((encrypted) => {
            setTextArea(encrypted);
            setEncrypted(!isEncrypted);
        });
    };

    const handleDecrypt = () => {
        decryptMessage(textArea, passwd).then((decrypted) => {
            changeValue(decrypted);
            setDecrypted(!isDecrypted);
        });
    };

    useEffect(() => {
        if (isEncrypted) {
            handleSaveNote();
        }
    }, [isEncrypted, textArea]);

    const showModal = () => setVisible(true);

    const handleOk = () => {
        if (!passwd) {
            openNotificationWithIcon({
                description: 'Empty pass phrase. Input your password',
                title: 'Error',
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

    return (
        <Col span={10}>
            <Row gutter={[16, 16]}>
                <Title level={2}>{getLiteralValue('Pages.Markdown.MarkdownInput.title')}</Title>
            </Row>
            <Row gutter={[16, 16]}>
                <Col>{`${getLiteralValue('Pages.Markdown.MarkdownInput.createDate')}${createDate}`}</Col>
            </Row>
            <ActionsPanel onSetTextValue={handleAddMarkdownSynt} />
            <Row gutter={[16, 16]}>
                <textarea className={styles.markdownInput} ref={myRef} value={textArea} rows={10} onChange={(e) => handleInputChange(e.target.value)} />
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
                <Modal title="Pass phrase" visible={visible} onOk={handleOk} onCancel={handleCancel}>
                    <Input.Password onChange={(e) => setPasswd(e.target.value)} placeholder="input password" />
                </Modal>
            </Row>
        </Col>
    );
};

MarkdownNoteEdit.displayName = 'MarkdownNoteEdit';
