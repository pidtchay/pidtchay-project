import { Row, Col, Button } from 'antd';
import React, { useContext, useReducer } from 'react';
import { useSelector } from 'react-redux';
import MarkdownNoteContext from 'Container/Markdown/Context';
import { MarkdownNoteEditor } from 'Container/Markdown/MarkdownNoteEditor';
import { MarkdownNotesList } from 'Container/Markdown/MarkdownNotesList';
import { IMarkdownNoteContext } from 'Container/Markdown/Models';
import { EMarkdownStep } from 'Container/Markdown/enums';
import { RootState } from 'Store';
import { setMarkdownStep } from 'Store/markdown_notes/actions';
import { reducer } from 'Store/markdown_notes/reducer';
import { getI18nValue } from 'Utils/common';

export const MarkdownNotes = () => {
    const initialState = useContext<IMarkdownNoteContext>(MarkdownNoteContext);
    const [state, dispatch] = useReducer(reducer, initialState);

    const literals = useSelector((state: RootState) => state.literals);

    const handleAddNote = () => {
        dispatch(setMarkdownStep(EMarkdownStep.CREATE));
    };

    const isMarkdownEditForm =
        state.currentNote ?? state.step !== EMarkdownStep.LIST;

    return (
        <MarkdownNoteContext.Provider value={{ ...state, dispatch }}>
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
