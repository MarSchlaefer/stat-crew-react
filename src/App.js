import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Login from './components/login';
import HomePage from './components/homePage';
import './App.css';

class App extends Component {
  render() {
    console.log('%c APP PROPS: ', 'color: firebrick', this.props)
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);


