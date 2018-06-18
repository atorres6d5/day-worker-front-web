import { combineReducers } from 'redux'
import helpPostReducer from './helpPostReducer.js'
import loginReducer from "./loginReducer.js"
import { routerReducer } from 'react-router-redux'


export default combineReducers({
  helpPost: helpPostReducer,
  login: loginReducer,
  routing: routerReducer
})
