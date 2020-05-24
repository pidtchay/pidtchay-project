import style from 'Style/App.less';
import React from 'react';
import { LogIn } from 'Container/Login';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { AuthRoute } from 'Container/AuthRoute';

const Home = () => (<div>Home</div>);

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
            <AuthRoute path="/" Component={Home} />
        </Switch>
    </div>
</Router>);
