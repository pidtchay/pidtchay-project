import { Row, Col, Button } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { NoteEditor } from 'Container/Markdown/EditForm/NoteEditor';
import { MarkdownNotesList } from 'Container/Markdown/ListForm/MarkdownNotesList';
import MarkdownNoteContext from 'Container/Markdown/NotesContext';
import { EFormStep } from 'Container/Markdown/enums';
import { RootState } from 'Store/root';
import { useLiteralValue } from 'Utils/hooks';
import { useNoteContext } from '../hooks';

/**
 * Wrapper component for displaying a list of notes or creating / editing a single note.
 * The component uses context.
 *
 * @returns {JSX.Element} [return0] list of notes or a single note.
 */
export const MarkdownNotesPage = () => {
    const markdownState = useSelector((state: RootState) => state.notes);
    const { currentNote, step } = markdownState?.data;

    const { setNextStep } = useNoteContext();

    const { getValue: getLiteralValue } = useLiteralValue();

    const handleAddNote = () => {
        setNextStep(EFormStep.CREATE);
    };

    const isMarkdownEditForm = currentNote ?? step !== EFormStep.LIST;

    return (
        <MarkdownNoteContext.Provider value={{ ...markdownState.data }}>
            {!isMarkdownEditForm && (
                <Row gutter={[16, 16]}>
                    <Col>
                        <Button type="primary" onClick={() => handleAddNote()}>
                            {getLiteralValue('ACTIONS.add')}
                        </Button>
                    </Col>
                </Row>
            )}
            <Row gutter={[16, 16]}>{isMarkdownEditForm ? <NoteEditor /> : <MarkdownNotesList />}</Row>
        </MarkdownNoteContext.Provider>
    );
};
