import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Header from './components/Header';

import './index.css';


// since history is only use ones then its going to be refactor to be inline with the history call in Router
// Header component is created to give users a way to move around all the route links in the app
ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header Component={App} />} />
        </Switch>
    </Router>,
     document.getElementById('root')
     );


     const AppWithHeader = () => {
        return(
            <Header Component= {App} />
        )
    }

    //higher order component example:
    //Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
    const EnhancedComponent = higherOrderComponent(WrappedComponent);