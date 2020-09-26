import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { listRepositoriesState, IInitialState } from './state';

export const listRepositoriesSlice = createSlice({
    name: 'LIST_REPOSITORIES',
    initialState: listRepositoriesState,
    reducers: {
        fetching: (state) => {
            // LIST_REPOSITORIES_FETCHING
            state.state = 'requesting';
        },
        fetched: (state, action: PayloadAction<Partial<IInitialState>>) => {
            // LIST_REPOSITORIES_FETCHED
            state.repositories = action.payload.repositories;
            state.state = 'success';
        },
        fetchingError: (state, action: PayloadAction<Partial<IInitialState>>) => {
            // LIST_REPOSITORIES_FETCH_ERROR
            state.errors = action.payload.errors;
            state.state = 'failed';
        },
        clean: (state) => {
            // LIST_REPOSITORIES_CLEAR
            state.repositories = [];
            state.state = 'cleaned';
        }
    }
});
