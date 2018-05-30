import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import App  from './components/App.js'


const PrivateRoute = ({
  component: Component,
  ...rest
}) => (<Route {...rest} render={props => (
    localStorage.getItem('Industry Token') || localStorage.getItem('Admin Token')
    ? (<Component {...props}/>)
    : (<Redirect to={{
        pathname: '/',
        state: {
          from: props.location
        }
}}/>))}/>)



class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (<BrowserRouter>
      <Switch>
        <Route path="/" exact="exact" component={App}/>
        <Route component={App}/>
      </Switch>
    </BrowserRouter>);
  }

}

export default Routes
