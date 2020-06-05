import style from 'Style/App.less';
import React from 'react';
import { LogIn } from 'Container/Login';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { AuthRoute } from 'Container/AuthRoute';
import { HomPage } from 'Container/HomePage';
import 'antd/dist/antd.css';

export const App = () => (<Router>
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route path='/login'>
                <div className={style.main}><LogIn /></div>
            </Route>
            <AuthRoute path="/" Component={HomPage} />
        </Switch>
    </div>
</Router>);
