import { combineReducers } from 'redux'
import helpPostReducer from './helpPostReducer.js'
import loginReducer from "./loginReducer.js"
import { routerReducer } from 'react-router-redux'
import homeReducer from './homeReducer.js'
import newUserReducer from './newUserReducer'


export default combineReducers({
  helpPost: helpPostReducer,
  login: loginReducer,
  routing: routerReducer,
  home: homeReducer,
  newUser:newUserReducer
})
