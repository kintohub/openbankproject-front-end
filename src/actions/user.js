import axios from 'axios'
import { push } from 'react-router-redux'

export const SIGNUP = 'SIGNUP'

export const signUp = data => dispatch => {
  return axios.post('/users/signup', data).then(() => {
    dispatch(push('/'))
  })
}
