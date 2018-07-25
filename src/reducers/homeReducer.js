import {
PROJECTS_CLICK

} from '../actions/types.js'

const INITIAL_STATE = {
  user:{},
  projects:{},
  reviews:{}
}

export default ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROJECTS_CLICK:
      return { INITIAL_STATE }

    default:
      return state

  }
}
