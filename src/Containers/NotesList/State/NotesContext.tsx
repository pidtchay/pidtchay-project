import React from 'react';
import { AnyAction } from 'redux';
import { INote } from '../Models';

export type TInitialState = {
    notes: INote[];
};

export const defaultState: TInitialState = {
    notes: []
};

type TNotesContext = {
    state: TInitialState;
    dispatch: React.Dispatch<any>;
};

export const NotesContext = React.createContext<TNotesContext>({
    state: defaultState,
    dispatch: () => null
});

type TNotesProvider = {
    reducer: React.Reducer<TInitialState, AnyAction>;
    initialState: TInitialState;
};

export const NotesProvider: React.FC<React.PropsWithChildren<TNotesProvider>> = ({ children, reducer, initialState }: React.PropsWithChildren<TNotesProvider>) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <NotesContext.Provider value={{ state, dispatch }}>{children}</NotesContext.Provider>;
};
