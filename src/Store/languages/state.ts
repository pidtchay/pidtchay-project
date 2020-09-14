import { ILiterals } from 'Model/Literals';

export interface ILanguagesState {
    state: string;
    languages: ILiterals;
    errors: [];
}

export const initialState: ILanguagesState = {
    state: '',
    languages: {},
    errors: []
};
