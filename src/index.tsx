import { App } from 'app';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import { fetchLanguages } from 'Store/languages/api';
import { newRootReducer } from 'Store/root';

// !!! MIDDLEWARE
const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true
}).concat(logger);

// !!! STORE
const store = configureStore({
    reducer: newRootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
});

store.dispatch(fetchLanguages());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
