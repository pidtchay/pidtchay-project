import * as React from 'react';
import { RouteComponentProps, Route } from "react-router-dom";
import { LogIn } from './Login';
import { useSelector } from 'react-redux';
import { RootState } from 'Store';

/**
 * @property Component 
 * @property path
 * @property exact
 */
interface IProps {
    Component: React.FC<RouteComponentProps>;
    path: string;
    exact?: boolean;
}

/**
 * Authorisation route component
 */
export const AuthRoute:React.FC<IProps> = ({Component, path, exact = false}) => {
    const authenticated = useSelector((state: RootState) => state.system.authenticated);
    return (
        <Route path={path} exact={exact}  render={(props: RouteComponentProps) => 
            authenticated ? <Component {...props}/> : <LogIn />
        }/>
    );
}