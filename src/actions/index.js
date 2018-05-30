import{
  POST_TITLE_CHANGE,
  POST_LOCATION_CHANGE,
  SUBMIT_NEW_HELP_POST,
  NEW_POST_SUCCESS,
  NEW_POST_FAIL
} from "./types.js"

import axios from "axios"

const URL = process.env.REACT_APP_API_URL_DEV


export const emailChanged = ( text ) => {
  return {
    type: POST_TITLE_CHANGE,
    payload: text
  }
}


export const locationChange =( zip ) =>{
  return {
    type: POST_LOCATION_CHANGE,
    payload: zip
  }
}

export const submitNewPost = ( newPost ) =>{
  const {
    postUser,
    postTitle,
    postZip,
    postBlurb,
    active:true
    toolsRequired:false
    willTeach:false
    contact
  } = newPost
  return ( dispatch ) => {
    dispatch({type:SUBMIT_NEW_HELP_POST})
    axios.post(`${URL}helpWanted/new`, {create:newPost})
    .then(result=>{
      console.log(result)
      dispatch({type:NEW_POST_SUCCESS, payload:result.data})
    })
    .catch(err=>{
      dispatch({type:NEW_POST_FAIL, payload:err })
      console.log(err)
    })
  }
}
