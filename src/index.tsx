import { App } from 'app';
// import { defaultState, NotesContext, NotesProvider } from 'Containers/NotesList/NotesContext';
// import { notesSlice } from 'Containers/NotesList/reducer';
// import { NOTES_DATA } from 'dataNotes';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
