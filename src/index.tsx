import { App } from 'app';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'Core/i18n/i18n';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
    <RecoilRoot>
        <React.StrictMode>
            <React.Suspense fallback={false}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.Suspense>
        </React.StrictMode>
    </RecoilRoot>,
    document.getElementById('root')
);
