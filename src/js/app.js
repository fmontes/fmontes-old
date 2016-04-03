import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router';
import Home from './components/Home';
import Main from './components/Main';
import NoMatch from './components/NoMatch';
import Dribbble from './components/Dribbble';
import PortfolioDetail from './components/PortfolioDetail'

const history = window.location.hostname === 'localhost' ? hashHistory : browserHistory;

render((
    <Router history={history}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/dribbble" component={Dribbble} />
            <Route path="/portfolio/:id" component={PortfolioDetail} />
            <Route path="*" component={NoMatch} />
        </Route>
    </Router>
), document.getElementById('app'));
