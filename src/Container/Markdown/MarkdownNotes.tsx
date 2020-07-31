import { Row, Col, Button } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MarkdownNoteContext from 'Container/Markdown/Context';
import { MarkdownNoteEditor } from 'Container/Markdown/MarkdownNoteEditor';
import { MarkdownNotesList } from 'Container/Markdown/MarkdownNotesList';
import { EMarkdownStep } from 'Container/Markdown/enums';
import { RootState } from 'Store';
import { setMarkdownStep } from 'Store/markdown_notes/actions';
import { useLiteralValue } from 'Utils/hooks';

export const MarkdownNotes = () => {
    const markdownState = useSelector(
        (state: RootState) => state.markdownNotes
    );

    const dispatch = useDispatch();

    const { getValue: getLiteralValue } = useLiteralValue();

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
                            {getLiteralValue('ACTIONS.add')}
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
