// import { INoteData } from 'Modules/Notes/Models';
import { CardLayout, IFooterActions } from 'Common/Components/CardLayout/CardLayout';
import { DebugObserver } from 'Core/DebugObserver/DebugObserver';
import { INoteData } from 'Modules/Notes/Models';
import { NotesListStateAtom } from 'Modules/Notes/Store/atoms/NoteListState';
import { SelectedNoteGuidStateAtom } from 'Modules/Notes/Store/atoms/SelectedNoteGuiState';
import { SelectedNoteStateSelector } from 'Modules/Notes/Store/selectors/SelectedNoteState';
import React from 'react';
import { RecoilRoot, useSetRecoilState, useRecoilValue, useRecoilValueLoadable, useResetRecoilState } from 'recoil';

const CurrentNoteGuidInfo = () => {
    const noteGuid = useRecoilValue(SelectedNoteGuidStateAtom);
    return <div>{`Selected GUID: ${noteGuid}`}</div>;
};

const CurrentNoteCard = () => {
    const currentNote = useRecoilValueLoadable(SelectedNoteStateSelector);

    // Use useResetRecoilState to reset state
    const resetNoteState = useResetRecoilState(SelectedNoteGuidStateAtom);

    const isSuccessData = currentNote.state === 'hasValue';
    const title = isSuccessData ? (currentNote.contents as INoteData)?.title : '';

    const calculateFooterActions = (): IFooterActions[] => {
        if (!currentNote.contents) return null;
        return [
            {
                label: 'Close',
                action: resetNoteState
            }
        ];
    };

    return (
        <CardLayout
            title={title}
            isLoading={currentNote.state === 'loading'}
            isError={currentNote.state === 'hasError'}
            isSuccess={isSuccessData}
            footerActions={calculateFooterActions()}
        >
            {isSuccessData && <>{(currentNote.contents as INoteData)?.text}</>}
        </CardLayout>
    );
};

const NotesListExampleComponent = () => {
    const setNoteGuid = useSetRecoilState(SelectedNoteGuidStateAtom);
    const notesList = useRecoilValueLoadable(NotesListStateAtom);

    const handleChangeGuid = (guid: string) => setNoteGuid(guid);

    return (
        <>
            <div>
                <div>
                    {notesList.state === 'loading' && <p>Is loading...</p>}
                    {notesList.state === 'hasError' && <p>Something wrong...</p>}
                    {notesList.state === 'hasValue' &&
                        notesList.contents.map((note) => (
                            <li key={note?.id}>
                                <div>
                                    <p>{note.text}</p>
                                    <button type="button" onClick={() => handleChangeGuid(note.id)}>
                                        Change
                                    </button>
                                </div>
                            </li>
                        ))}
                </div>
                <div>
                    <CurrentNoteGuidInfo />
                    <CurrentNoteCard />
                </div>
            </div>
        </>
    );
};

export const NotesListExample = (): JSX.Element => (
    <RecoilRoot>
        <DebugObserver />
        <NotesListExampleComponent />
    </RecoilRoot>
);
