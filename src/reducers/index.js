import { combineReducers } from 'redux'
import helpPostReducer from './helpPostReducer.js'


export default combineReducers({
  helpPost: helpPostReducer
})
