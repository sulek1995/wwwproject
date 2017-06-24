import ReactDOM from 'react-dom';
import React from 'react';
import Main from './src/MainPage'
import {Router, Route, IndexRoute, browserHistory} from "react-router";


ReactDOM.render(
  <Router history = {browserHistory}>
      <Route path = '/main' component={Main}/>
  </Router>, document.getElementById('app')
);