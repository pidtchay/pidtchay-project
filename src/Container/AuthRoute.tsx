/* eslint-disable jsdoc/require-param */
/* eslint-disable jsdoc/require-returns */
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { MenuRoute } from 'Constants/Routes';
import { NewRootState } from 'Store/root';

/**
 * Authorisation route component.
 */
export const AuthRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
    const auth = useSelector((state: NewRootState) => state.authSession.authenticated);
    return <Route {...rest} render={(props) => (!auth ? <Redirect to={MenuRoute.LOGIN} /> : <Component {...props} />)} />;
};
