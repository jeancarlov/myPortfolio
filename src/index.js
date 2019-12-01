import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import './index.css';


// since history is only use ones then its going to be refactor to be inline with the history call in Router
ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route path='/' component={App} />
        </Switch>
    </Router>,
     document.getElementById('root')
     );


