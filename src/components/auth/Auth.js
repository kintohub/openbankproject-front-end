import { Component } from 'react'
import axios from 'axios'
import { SubmissionError } from 'redux-form'

class Auth extends Component {
  constructor(props) {
    super(props)
    axios.interceptors.request.use(config => {
      if (this.props.token) {
        config.headers.Authorization = `Bearer ${this.props.token}`
      }
      return config
    })
    axios.interceptors.response.use(
      response => {
        const data = response.data || {}
        if (data.errors) {
          if (data.errors.error) {
            data.errors._error = data.errors.error
            delete data.errors.error
          }
          throw new SubmissionError(data.errors)
        }
        return data
      },
      error => {
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          let { errors } = error.response.data
          if (errors.error) {
            errors._error = errors.error
            delete errors.error
          }
          throw new SubmissionError(errors)
        }
      }
    )
  }

  componentDidMount() {
    console.log(this.props.token)
    if (!this.props.token) {
      this.props.authorize()
    }
  }

  render() {
    return this.props.token ? this.props.children : null
  }
}

export default Auth
