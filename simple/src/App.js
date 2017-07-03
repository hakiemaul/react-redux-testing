import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import MainPage from './components/MainPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={MainPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
