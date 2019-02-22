import axios from 'axios'
import { push } from 'react-router-redux'

export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'
export const GETUSERDETAILS = 'GETUSERDETAILS'
export const AUTH = 'AUTH'
export const UPDATE_TOKEN = 'UPDATE_TOKEN'

export const signUp = data => dispatch => {
  return axios.post('/users/signup', data).then(() => {
    dispatch(push('/'))
  })
}

export const tokenUpdate = token => {
  return {
    type: UPDATE_TOKEN,
    token
  }
}

export const authorize = () => dispatch => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/authorize`, {
      clientId: process.env.REACT_APP_AUTH_APP_ID,
      clientSecret: process.env.REACT_APP_AUTH_APP_SECRET
    })
    .then(response => {
      const token = response.data.data.token
      tokenUpdate(token)
    })
}
