import { createReducer } from '@reduxjs/toolkit';
import { listRepositoriesFetching, listRepositoriesFetched, listRepositoriesFetchingError, listRepositoriesClean } from './actions';
import { listRepositoriesState } from './state';

export const listRepositoriesReducer = createReducer(listRepositoriesState, {
    [listRepositoriesFetching.type]: (state) => {
        state.state = 'requesting';
    },
    [listRepositoriesFetched.type]: (state, action) => {
        state.repositories = action.payload.repositories;
        state.state = 'success';
    },
    [listRepositoriesFetchingError.type]: (state, action) => {
        state.errors = action.payload.errors;
        state.state = 'failed';
    },
    [listRepositoriesClean.type]: (state) => {
        state.repositories = [];
        state.state = 'cleaned';
    }
});
