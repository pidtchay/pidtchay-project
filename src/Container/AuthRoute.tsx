import * as React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'Store';
import { MenuRoute } from 'Constants/Routes';

/**
 * Authorisation route component
 */
export const AuthRoute: React.FC<RouteProps> = ({component: Component, ...rest}) => {
  const auth = useSelector((state: RootState) => state.system.authenticated);
  console.debug({auth, rest, Component});
  return (
    <Route {...rest} render={(props) => (
      !auth
      ? <Redirect to={MenuRoute.LOGIN} />
      : <Component {...props}/>
    )} />
  );
};
