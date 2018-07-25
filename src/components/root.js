import React, { Component } from 'react';
import Login from './login.js'
import Home from './home.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ConnectedRouter } from "react-router-redux";
import '../index.css'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => ( localStorage.getItem('Token') ? (<Component {...props}/>) : (
    <Redirect to={{
        pathname: '/',
        state: {
          from: props.location
        }
      }}/>
    )
    )}/>
  )


const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <Route path="/" component={Login} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}



Root.propTypes = {
  store: PropTypes.object.isRequired
}


export default Root;
