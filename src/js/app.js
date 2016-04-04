import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Home from './components/Home';
import Main from './components/Main';
import NoMatch from './components/NoMatch';
import Dribbble from './components/Dribbble';
import PortfolioDetail from './components/PortfolioDetail'

render((
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/dribbble" component={Dribbble} />
            <Route path="/portfolio/:id" component={PortfolioDetail} />
            <Route path="*" component={NoMatch} />
        </Route>
    </Router>
), document.getElementById('app'));
