import React, { Component } from 'react';
import './App.css';

import { Todo, TodoDetail } from './Components';
import { Route, Link, NavLink, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Todo} />
          <Route path='/detail/:id' component={(props) => <TodoDetail {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
