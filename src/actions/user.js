import axios from 'axios'
import { push } from 'react-router-redux'

export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SAVE_USER_DETAILS = 'SAVE_USER_DETAILS'
export const AUTH = 'AUTH'
export const UPDATE_TOKEN = 'UPDATE_TOKEN'

export const tokenUpdate = token => ({ type: UPDATE_TOKEN, token })
export const saveUser = data => ({ type: SAVE_USER_DETAILS, data })

export const getTokenFromStorage = () => {
  return window.localStorage.getItem('kintohub-hsbc:auth')
}

export const isUserLoggedIn = () => {
  return !!window.localStorage.getItem('kintohub-hsbc:auth:isloggedin')
}

const setToken = token => {
  const key = 'kintohub-hsbc:auth'
  if (token) {
    window.localStorage.setItem(key, token)
  } else {
    window.localStorage.removeItem(key)
  }
}

export const setIsLoggedIn = isLoggedIn => {
  const key = 'kintohub-hsbc:auth:isloggedin'
  if (isLoggedIn) {
    window.localStorage.setItem(key, true)
  } else {
    window.localStorage.removeItem(key)
  }
}

export const authorize = () => dispatch => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/authorize`, {
      clientId: process.env.REACT_APP_AUTH_APP_ID,
      clientSecret: process.env.REACT_APP_AUTH_APP_SECRET
    })
    .then(response => {
      const token = response.data.token
      setToken(token)
      dispatch(tokenUpdate(token))
    })
}

export const signUp = data => dispatch => {
  return axios
    .post(
      `${
        process.env.REACT_APP_SERVER_URL
      }/openbankprojectloginapi/users/signup`,
      data
    )
    .then(response => {
      setIsLoggedIn(true)
      dispatch(saveUser(response.data.user))
      dispatch(push('/'))
    })
}

export const getUser = () => dispatch => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}/openbankprojectloginapi/users/me`)
    .then(response => {
      dispatch(saveUser(response.data.user))
    })
}

export const signOut = () => {
  setToken(null)
  setIsLoggedIn(null)
  return { type: LOGOUT }
}
