import * as React from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { MenuRoute } from 'Constants/Routes';
import { RootState } from 'Store';

/**
 * Authorisation route component.
 *
 * @param root0
 * @param root0.component
 */
export const AuthRoute: React.FC<RouteProps> = ({
    component: Component,
    ...rest
}) => {
    const auth = useSelector((state: RootState) => state.system.authenticated);
    return (
        <Route
            {...rest}
            render={(props) =>
                !auth ? (
                    <Redirect to={MenuRoute.LOGIN} />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};
