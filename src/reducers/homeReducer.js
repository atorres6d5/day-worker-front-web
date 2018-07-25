import {
PROJECTS_CLICK,
REQUEST_USER_PROFILE,
REQUEST_USER_SUCCESS

} from '../actions/types.js'

const INITIAL_STATE = {
  user:{},
  projects:{},
  reviews:{},
  loading:false
}

export default ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROJECTS_CLICK:
      return { INITIAL_STATE }

    case REQUEST_USER_PROFILE:
      return { ...state, loading: true }
    case REQUEST_USER_SUCCESS:
      return {
          ...state,
          loading: false,
          user:action.payload.user,
          projects:action.payload.projects,
          reviews:action.payload.reviews
        }
    default:
      return state

  }
}
