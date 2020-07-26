import { Row, Col, Button } from 'antd';
import React, { useContext, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Store';
import { setMarkdownStep } from 'Store/markdown_notes/actions';
import { reducer } from 'Store/markdown_notes/reducer';
import { getI18nValue } from 'Utils/common';
import { MarkdownNoteEditor } from './MarkdownNoteEditor';
import { MarkdownNotesList } from './MarkdownNotesList';
import MarkdownNoteContext from './context';
import { EMarkdownStep } from './enums';
import { IMarkdownNoteContext } from './models';

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
