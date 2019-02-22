import {
  SIGNUP,
  AUTH,
  UPDATE_TOKEN,
  SAVE_USER_DETAILS,
  getTokenFromStorage,
  isUserLoggedIn
} from '../actions/user'

const initialState = {
  auth: {
    token: getTokenFromStorage(),
    isLoggedIn: isUserLoggedIn()
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      const newToken = state.auth.token ? state.auth.token : action.token
      return {
        ...state,
        auth: {
          token: newToken
        }
      }
    case SIGNUP:
      return {
        ...state,
        userInformation: action.data,
        isLoggedIn: true
      }
    case SAVE_USER_DETAILS:
      return {
        ...state,
        details: action.data
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
