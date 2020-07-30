import { Row, Col, Button } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MarkdownNoteContext from 'Container/Markdown/Context';
import { MarkdownNoteEditor } from 'Container/Markdown/MarkdownNoteEditor';
import { MarkdownNotesList } from 'Container/Markdown/MarkdownNotesList';
import { EMarkdownStep } from 'Container/Markdown/enums';
import { RootState } from 'Store';
import { setMarkdownStep } from 'Store/markdown_notes/actions';
import { getI18nValue } from 'Utils/common';

export const MarkdownNotes = () => {
    const markdownState = useSelector(
        (state: RootState) => state.markdownNotes
    );

    const dispatch = useDispatch();

    const literals = useSelector((state: RootState) => state.literals);

    const handleAddNote = () => {
        dispatch(setMarkdownStep(EMarkdownStep.CREATE));
    };

    const isMarkdownEditForm =
        markdownState.currentNote ?? markdownState.step !== EMarkdownStep.LIST;

    return (
        <MarkdownNoteContext.Provider value={{ ...markdownState, dispatch }}>
            {!isMarkdownEditForm && (
                <Row gutter={[16, 16]}>
                    <Col>
                        <Button type="primary" onClick={() => handleAddNote()}>
                            {getI18nValue(literals, 'ACTIONS.add')}
                        </Button>
                    </Col>
                </Row>
            )}
            <Row gutter={[16, 16]}>
                {isMarkdownEditForm ? (
                    <MarkdownNoteEditor />
                ) : (
                    <MarkdownNotesList />
                )}
            </Row>
        </MarkdownNoteContext.Provider>
    );
};
