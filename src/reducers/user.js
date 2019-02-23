import {
  SIGNUP,
  UPDATE_TOKEN,
  SAVE_USER_DETAILS,
  LOGOUT,
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
          ...state.auth,
          token: newToken
        }
      }
    case SIGNUP:
      return {
        ...state,
        userInformation: action.data,
        auth: {
          ...state.auth,
          isLoggedIn: true
        }
      }
    case SAVE_USER_DETAILS:
      return {
        ...state,
        details: action.data,
        auth: {
          ...state.auth,
          isLoggedIn: true
        }
      }
    case LOGOUT: {
      return {
        ...state,
        auth: {
          isLoggedIn: false,
          token: null
        }
      }
    }
    default:
      return state
  }
}
