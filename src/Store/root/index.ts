import { combineReducers } from 'redux';
import { authSessionReducer } from 'Store/authSession/reducers';
import { languagesReducer } from 'Store/languages/reducers';
import { listRepositoriesSlice } from 'Store/repositories/slice';

export const newRootReducer = combineReducers({
    githubRepos: listRepositoriesSlice.reducer,
    languages: languagesReducer,
    authSession: authSessionReducer
});
export type NewRootState = ReturnType<typeof newRootReducer>;
