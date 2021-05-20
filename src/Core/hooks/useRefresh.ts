import * as H from 'history';
import React from 'react';

/**
 * @param history
 * @param path
 * @param resetRoute
 */
export default function useRefresh(history: H.History<unknown>, path: string, resetRoute = '/'): () => void {
    let handler: any;

    const refresh = () => {
        history.push(resetRoute);

        handler = setTimeout(() => history.push(path), 10);
    };

    React.useEffect(() => {
        return () => handler && clearTimeout(handler);
    }, [handler]);

    return refresh;
}
