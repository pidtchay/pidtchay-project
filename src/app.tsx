import React from 'react';

const ErrorBoundary = React.lazy(() => import(/* webpackChunkName: "ErrorBoundary" */ 'Components/ErrorBoundary/ErrorBoundary'));

export const App = () => {
    return (
        <ErrorBoundary>
            <div>Hello</div>
        </ErrorBoundary>
    );
}
