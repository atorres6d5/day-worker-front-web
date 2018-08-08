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
  SAVE_TOKEN
} from './types.js'
// import  history from 'history'
import { push } from 'react-router-redux'


import axios from 'axios'

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
      console.log(data, 'result data');
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



// export const submitNewPost = ( newPost ) =>{
//   const {
//     postUser,
//     postTitle,
//     postZip,
//     postBlurb,
//     active:true
//     toolsRequired:false
//     willTeach:false
//     contact
//   } = newPost
//   return ( dispatch ) => {
//     dispatch({type:SUBMIT_NEW_HELP_POST})
//     axios.post(`${URL}helpWanted/new`, {create:newPost})
//     .then(result=>{
//       console.log(result)
//       dispatch({type:NEW_POST_SUCCESS, payload:result.data})
//     })
//     .catch(err=>{
//       dispatch({type:NEW_POST_FAIL, payload:err })
//       console.log(err)
//     })
//   }
// }
