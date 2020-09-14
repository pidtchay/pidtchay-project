import { combineReducers } from 'redux';
import { languagesReducer } from 'Store/languages/reducers';
import { listRepositoriesSlice } from 'Store/repositories/slice';
// import { listRepositoriesReducer } from 'Store/repositories/reducers';

export const newRootReducer = combineReducers({
    githubRepos: listRepositoriesSlice.reducer,
    languages: languagesReducer
    // githubRepos: listRepositoriesReducer
});
export type NewRootState = ReturnType<typeof newRootReducer>;
