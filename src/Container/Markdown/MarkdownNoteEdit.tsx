import { Row, Col, Button, Typography } from 'antd';
import moment from 'moment';
import React, { useContext, useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { DATE_TIME_FORMAT } from 'Constants/Common';
import { ActionsPanel } from 'Container/Markdown/ActionsPanel';
import MarkdownNoteContext from 'Container/Markdown/Context';
import { IMarkdownNoteContext } from 'Container/Markdown/Models';
import { EMarkdownStep } from 'Container/Markdown/enums';
import { useSelection } from 'Container/Markdown/hooks';
import { getSpacesInSyntax } from 'Container/Markdown/utils';
import { RootState } from 'Store';
import {
    setMarkdownText,
    updateNote,
    setCurrentNote,
    createNote,
    setMarkdownStep
} from 'Store/markdown_notes/actions';
import styles from 'Style/MarkdownEditor/MarkdowInput.less';
import { getI18nValue } from 'Utils/common';

const { Title } = Typography;

export const MarkdownNoteEdit = () => {
    const myRef = useRef<HTMLTextAreaElement>();

    const literals = useSelector((state: RootState) => state.literals);

    const { getLastSelection, setSelection } = useSelection(myRef);

    const { currentNote, dispatch } = useContext<IMarkdownNoteContext>(
        MarkdownNoteContext
    );

    const [textArea, setTextArea] = useState(
        currentNote ? currentNote.text : ''
    );
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
    });

    const handleInputChange = (value: string) => {
        setTextArea(value);
        setCurrentSyntax('');
        dispatch(setMarkdownText(value));
    };

    const handleAddMarkdownSynt = (value: string) => {
        console.debug({ selection: getLastSelection() });
        const newValue = `${textArea}${value}`;
        setTextArea(newValue);
        setCurrentSyntax(value);
        dispatch(setMarkdownText(newValue));
    };

    const handleSaveNote = () => {
        if (currentNote) {
            dispatch(updateNote(textArea));
            dispatch(setCurrentNote(null));
        } else {
            dispatch(
                createNote({
                    id: uuid(),
                    createDate: createDate,
                    text: textArea
                })
            );
        }

        dispatch(setMarkdownStep(EMarkdownStep.LIST));
        dispatch(setMarkdownText(''));
    };

    const createDate = currentNote
        ? currentNote.createDate
        : moment(new Date()).format(DATE_TIME_FORMAT);

    return (
        <Col span={10}>
            <Row gutter={[16, 16]}>
                <Title level={2}>
                    {getI18nValue(
                        literals,
                        'Pages.Markdown.MarkdownInput.title'
                    )}
                </Title>
            </Row>
            <Row gutter={[16, 16]}>
                <Col>{`${getI18nValue(
                    literals,
                    'Pages.Markdown.MarkdownInput.createDate'
                )}${createDate}`}</Col>
            </Row>
            <ActionsPanel onSetTextValue={handleAddMarkdownSynt} />
            <Row gutter={[16, 16]}>
                <textarea
                    className={styles.markdownInput}
                    ref={myRef}
                    value={textArea}
                    rows={10}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
            </Row>
            <Row gutter={[16, 16]}>
                <Col>
                    <Button type="primary" onClick={handleSaveNote}>
                        {getI18nValue(literals, 'ACTIONS.save')}
                    </Button>
                </Col>
            </Row>
        </Col>
    );
};

MarkdownNoteEdit.displayName = 'MarkdownNoteEdit';
