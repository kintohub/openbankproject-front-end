import { SIGNUP, AUTH, UPDATE_TOKEN } from '../actions/user'

const initialState = {
  everything: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case SIGNUP:
      return {
        ...state,
        userInformation: action.data
      }
    case AUTH:
      return {
        ...state,
        isLoggedIn: action.data
      }
    default:
      return state
  }
}
