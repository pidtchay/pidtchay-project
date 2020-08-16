import { Row, Col, Button } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EVENT_DELAY } from 'Constants/Common';
import MarkdownNoteContext from 'Container/Markdown/Context';
import { MarkdownNoteEditor } from 'Container/Markdown/MarkdownNoteEditor';
import { MarkdownNotesList } from 'Container/Markdown/MarkdownNotesList';
import { EMarkdownStep } from 'Container/Markdown/enums';
import { RootState } from 'Store';
import { setMarkdownStep } from 'Store/markdown_notes/actions';
import { useLiteralValue, useThrottledDispatchedFunction } from 'Utils/hooks';

/**
 * Wrapper component for displaying a list of notes or creating / editing a single note.
 * The component uses context.
 *
 * @returns {JSX.Element} [return0] list of notes or a single note.
 */
export const MarkdownNotes = () => {
    const markdownState = useSelector((state: RootState) => state.markdownNotes);

    const [throttledSetMarkdownStep] = useThrottledDispatchedFunction(setMarkdownStep, EVENT_DELAY);
    const dispatch = useDispatch();

    const { getValue: getLiteralValue } = useLiteralValue();

    const handleAddNote = () => {
        throttledSetMarkdownStep(EMarkdownStep.CREATE);
    };

    const isMarkdownEditForm = markdownState.currentNote ?? markdownState.step !== EMarkdownStep.LIST;

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
            <Row gutter={[16, 16]}>{isMarkdownEditForm ? <MarkdownNoteEditor /> : <MarkdownNotesList />}</Row>
        </MarkdownNoteContext.Provider>
    );
};
