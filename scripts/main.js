import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router , Route  , hashHistory } from 'react-router';
import { createHistory } from 'history'

import App from './app/App';
import About from './app/pages/About';
import ContactMe from './app/pages/ContactMe';


const routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/contactme" component={ContactMe} />
  </Router>
);



ReactDOM.render(routes ,  document.getElementById('app'));
