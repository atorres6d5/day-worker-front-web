import React, { Component } from 'react';
import Login from './login.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'


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


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Login} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}


export default Root;
