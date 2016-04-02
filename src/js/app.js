import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'
import Home from './components/Home'
import Main from './components/Main'
import NoMatch from './components/NoMatch'
import Porfolio from './components/Porfolio'

const history = window.location.hostname === 'localhost' ? hashHistory : browserHistory;

render((
    <Router history={history}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/porfolio" component={Porfolio} />
            <Route path="*" component={NoMatch} />
        </Route>
    </Router>
), document.getElementById('app'))
