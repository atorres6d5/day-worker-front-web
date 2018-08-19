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
} from '../actions/types.js'


const INITIAL_STATE = {
  name:'',
  username:'',
  email:'',
  password:'',
  passwordConfirm:'',
  zipcode:'',
  phone:'',
  userType:null,
  passMatch:null,
}

export default (state = INITIAL_STATE , action) => {
  console.log(action)

  switch (action.type) {
    case EMAIL_TEXT_CHANGE:
      return { ...state, email: action.payload }
    case NEW_PASSWORD:
      return { ...state, password: action.payload }
    case NEW_PASSWORD_CONFIRM:
      return { ...state, passwordConfirm: action.payload }
    case NAME_CHANGE:
      return { ...state, name: action.payload }
    case USERNAME_CHANGE:
      return { ...state, username: action.payload }
    case ZIPCODE_CHANGE:
      return { ...state, zipcode: action.payload }
    case PHONE_CHANGE:
      return { ...state, phone: action.payload }
    case USER_TYPE:
      return {...state, userType:action.payload }
    case PASS_MATCH:
      return { ...state, passMatch: action.payload}
    default:
      return state
  }
}
