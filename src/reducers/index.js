import { combineReducers } from 'redux'
import helpPostReducer from './helpPostReducer.js'
import loginReducer from "./loginReducer.js"


export default combineReducers({
  helpPost: helpPostReducer,
  login: loginReducer
})
