import React from 'react';
import { AnyAction } from 'redux';
import { INote } from 'Modules/Notes/Models';

export type TInitialState = {
    details: INote;
    notes: INote[];
};

export const defaultState: TInitialState = {
    details: null,
    notes: []
};

type TNotesContext = {
    state: TInitialState;
    dispatch: React.Dispatch<any>;
};

/**
 * The context of notes.
 * @prop {TInitialState} state The context state.
 * @prop {React.Dispatch<any>} dispatch The context dispatch.
 */
export const NotesContext = React.createContext<TNotesContext>({
    state: defaultState,
    dispatch: () => null
});

/**
 * The context provider model for notes.
 * @prop {React.Reducer<TInitialState, AnyAction>} reducer The context provider reducer.
 * @prop {TInitialState} initialState The context provider state.
 */
type TNotesProvider = {
    reducer: React.Reducer<TInitialState, AnyAction>;
    initialState: TInitialState;
};

/**
 * The context provider.
 * @param {TNotesProvider} param0  Basic properties of the component.
 * @returns {JSX.Element} The context provider for notes.
 */
export const NotesProvider: React.FC<React.PropsWithChildren<TNotesProvider>> = ({ children, reducer, initialState }: React.PropsWithChildren<TNotesProvider>) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <NotesContext.Provider value={{ state, dispatch }}>{children}</NotesContext.Provider>;
};
