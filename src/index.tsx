import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from 'app';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from 'Store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { loadLiterals } from 'Store/literals/actions';
import { loadLang } from 'i18n/i18n';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// tslint:disable-next-line: no-floating-promises
loadLang().then((lang) => store.dispatch(loadLiterals(lang)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
