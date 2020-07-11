import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Twekes from './Twekes';
import Login from './Login';
import Signup from './Signup';
import Blog from './Blog';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Twekes}/>
        <Route path="/accounts/login" exact={true} component={Login}/>
        <Route path="/accounts/signup" exact={true} component={Signup}/>
        <Route path="/blog" exact={true} component={Blog}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
