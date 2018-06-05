import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from "../reducers"
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import createHistory from 'history/createBrowserHistory'
import Router from './router.js'



class App extends Component {
  render() {
    const history = createHistory()
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </Provider>



    );
  }
}

export default App;
