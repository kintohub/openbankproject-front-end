import { Component } from 'react'
import axios from 'axios'

class Auth extends Component {
  constructor(props) {
    super(props)
    axios.interceptors.request.use(config => {
      if (this.props.token) {
        config.headers.Authorization = `Bearer ${this.props.token}`
      }
      return config
    })
  }

  componentDidMount() {
    if (!this.props.token) {
      this.props.authorize()
    }
  }

  render() {
    return this.props.token ? this.props.children : null
  }
}

export default Auth
