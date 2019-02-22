import axios from 'axios'

export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'
export const GETUSERDETAILS = 'GETUSERDETAILS'
export const AUTH = 'AUTH'
export const UPDATE_TOKEN = 'UPDATE_TOKEN'

export const tokenUpdate = token => ({ type: UPDATE_TOKEN, token })

export const authorize = () => dispatch => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/authorize`, {
      clientId: process.env.REACT_APP_AUTH_APP_ID,
      clientSecret: process.env.REACT_APP_AUTH_APP_SECRET
    })
    .then(response => {
      const token = response.data.data.token
      dispatch(tokenUpdate(token))
    })
}

export const signUp = data => dispatch => {
  console.log(data, 'in action')
  return axios
    .post(
      `${
        process.env.REACT_APP_SERVER_URL
      }/openbankprojectloginapi/users/signup`,
      data
    )
    .then(response => {
      // dispatch(push('/'))
    })
}
