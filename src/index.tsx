import { App } from 'app';
import { loadLang } from 'i18n/i18n';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from 'Store';
import { loadLiterals } from 'Store/literals/actions';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
loadLang().then((lang) => store.dispatch(loadLiterals(lang)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
