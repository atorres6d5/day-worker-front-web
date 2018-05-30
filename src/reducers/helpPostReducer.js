import{
  POST_TITLE_CHANGE,
  POST_LOCATION_CHANGE,
  SUBMIT_NEW_HELP_POST,
  NEW_POST_SUCCESS,
  NEW_POST_FAIL,
} from "../actions/types.js"

const INITIAL_STATE = {
    postUser:"",
    postTitle:"",
    postBlurb: false,
    err:null,
    loggedIn:false,
    postZip:null,
    loading:false

}

export default ( state = INITIAL_STATE, action)=>{
  console.log(action)

  switch(action.type){
    case POST_TITLE_CHANGE:
      return { ...state , postTitle:action.payload }

    case POST_LOCATION_CHANGE:
      return { ...state, postZip:action.payload }

    case SUBMIT_NEW_HELP_POST:
      return {...state, loading:true }

    case NEW_POST_SUCCESS:
      return { ...state, INITIAL_STATE}

    case NEW_POST_FAIL:
      return { ...state, loading:false, err:action.payload}

    default:
    return state
  }
}
