import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path='/' component={App} />
        </Switch>
    </Router>,
     document.getElementById('root')
     );


