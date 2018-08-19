import { push } from 'react-router-redux'
import axios from "axios"

import{
  POST_TITLE_CHANGE,
  POST_LOCATION_CHANGE,
  SUBMIT_NEW_HELP_POST,
  NEW_POST_SUCCESS,
  NEW_POST_FAIL,
  EMAIL_TEXT_CHANGE,
  PASSWORD_CHANGE_LOGIN,
  ATTEMPT_LOGIN_AUTH,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SAVE_TOKEN,
  REQUEST_USER_PROFILE,
  REQUEST_USER_SUCCESS
} from "./types.js"


//Login Actions
const URL = process.env.REACT_APP_API_URL_DEV


export const emailChanged = ( text ) => {
  return {
    type: EMAIL_TEXT_CHANGE,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return{
    type:PASSWORD_CHANGE_LOGIN,
    payload:text
  }
}

export const attemptLogin = ({email, password}) => {
  console.log(email, password);
  return (dispatch)=>{
    dispatch({type: ATTEMPT_LOGIN_AUTH})
    axios.post(`${URL}/users/login`, { email, password })
    .then(data=>{
      console.log(data, "result data");
      localStorage.setItem('Token', data.data.token)
      dispatch({type: LOGIN_SUCCESS, payload:data.data.token})
      dispatch(push('home'))
    })
    .catch(err=>{
      console.log(err)
      dispatch({type:LOGIN_FAIL, payload:err })
    })
  }
}
