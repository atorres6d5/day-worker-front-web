import {
  EMAIL_TEXT_CHANGE,
  PASSWORD_CHANGE_LOGIN,
  ATTEMPT_LOGIN_AUTH,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../actions/types.js"

const INITIAL_STATE = {
  email:"",
  password:"",
  error:"",
  loading:false,
}


export default ( state = INITIAL_STATE, action)=>{
  console.log(action)

  switch (action.type) {
    case EMAIL_TEXT_CHANGE:
      return{ ...state, email:action.payload }

    case ATTEMPT_LOGIN_AUTH:
      return { ...state, loading:true }

    case PASSWORD_CHANGE_LOGIN:
      return{ ...state, password:action.payload}

    case LOGIN_SUCCESS:
      return INITIAL_STATE

    case LOGIN_FAIL:
      return { ...state, error:action.payload}


    default:
      return state

  }
}
