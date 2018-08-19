import { push } from 'react-router-redux'
import axios from "axios"

import {
  EMAIL_TEXT_CHANGE,
  NEW_PASSWORD,
  NEW_PASSWORD_CONFIRM,
  NAME_CHANGE,
  USERNAME_CHANGE,
  ZIPCODE_CHANGE,
  PHONE_CHANGE,
  USER_TYPE,
  PASS_MATCH
} from './types.js'

const URL = process.env.REACT_APP_API_URL_DEV

export const emailChanged = ( text ) => {
  return {
    type: EMAIL_TEXT_CHANGE,
    payload: text
  }
}

export const passwordChangedNew = (text) => {
  console.log(text);
  return{
    type:NEW_PASSWORD,
    payload:text
  }
}

export const passConfirm = (text) =>{
  return{
    type:NEW_PASSWORD_CONFIRM,
    payload: text
  }
}

export const nameChange = ( text ) => {
  return{
    type:NAME_CHANGE,
    payload: text
  }
}

export const userNameChange = ( text ) =>{
  return{
    type:USERNAME_CHANGE,
    payload: text
  }
}

export const zipChange = ( text ) => {
  return{
    type:ZIPCODE_CHANGE,
    payload: text
  }
}

export const phoneChange = ( text ) => {
  return{
    type:PHONE_CHANGE,
    payload: text
  }
}


export const userType = ( text ) => {
  switch ( text ) {
    case ("WORKER"):
     return {
       type: USER_TYPE,
       payload: "WORKER"
     }

    case ("POSTER"):
    return {
      type: USER_TYPE,
      payload: "POSTER"
    }

    default:
    return {
      type: USER_TYPE,
      payload: "ERR"
    }

  }
}

export const passMatch = ( {pass1, pass2} ) =>{
  switch ( pass1, pass2 ) {
    case (pass1 === pass2) :
      return {
      type: PASS_MATCH,
      payload: true
      }
    case (pass1 != pass2):
      return {
      type: PASS_MATCH,
      payload: false
      }
    default:
      return{
      type: PASS_MATCH,
      payload: false
      }
  }
}
