import ReactDOM from 'react-dom';
import React from 'react';
import Main from './src/MainPage'
import Gallery from './src/Gallery'
import {Router, Route, IndexRoute, browserHistory} from "react-router";


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Main}/>
        <Route path='/gallery' component={Gallery}/>
    </Router>, document.getElementById('app')
);