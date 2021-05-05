import { CardLayout, IFooterActions } from 'Common/Components/CardLayout/CardLayout';
import { MarkdownField } from 'Components/MarkdownField/MarkdownField';
import { INodeQueryStringParams, INoteData } from 'Modules/Notes/Models';
import { SelectedNoteGuidStateAtom } from 'Modules/Notes/Store/atoms/SelectedNoteGuiState';
import { SelectedNoteStateSelector } from 'Modules/Notes/Store/selectors/SelectedNoteState';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilValueLoadable, useResetRecoilState, useSetRecoilState } from 'recoil';

/**
 * View note form.
 * @returns {JSX.Element} View form.
 */
const NoteViewForm = (): JSX.Element => {
    const { t } = useTranslation(['common']);
    const history = useHistory();
    const { id } = useParams<INodeQueryStringParams>();
    const setNoteGuid = useSetRecoilState(SelectedNoteGuidStateAtom);
    const currentNote = useRecoilValueLoadable(SelectedNoteStateSelector);
    // Use useResetRecoilState to reset state
    const resetNoteState = useResetRecoilState(SelectedNoteGuidStateAtom);

    useEffect(() => {
        setNoteGuid(id);
        return () => {
            resetNoteState();
        };
    }, []);

    const handleClose = () => {
        history.push(`/notes`);
    };

    const handleEdit = () => {
        history.push(`/notes/edit/${(currentNote.contents as INoteData)?.id}`);
    };

    const calculateFooterButtons = (isErrorData: boolean): IFooterActions[] => {
        const actions: IFooterActions[] = [
            {
                label: t('common:ACTIONS.Cancel'),
                action: handleClose
            }
        ];

        if (!isErrorData) {
            actions.push({
                label: t('common:ACTIONS.Edit'),
                action: handleEdit,
                isGeneral: true
            });
        }

        return actions;
    };

    const isSuccessRequest = currentNote.state === 'hasValue';
    const isErrorRequest = currentNote.state === 'hasError';
    const title = isSuccessRequest ? (currentNote.contents as INoteData)?.title : `Requested note ID: ${id}`;

    return (
        <CardLayout
            title={title}
            isLoading={currentNote.state === 'loading'}
            isSuccess={isSuccessRequest}
            isError={isErrorRequest}
            footerActions={calculateFooterButtons(isErrorRequest)}
        >
            {isSuccessRequest && <MarkdownField source={(currentNote.contents as INoteData)?.text} />}
        </CardLayout>
    );
};

NoteViewForm.displayName = 'NoteViewForm';

export default NoteViewForm;
