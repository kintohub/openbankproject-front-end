import React, { Component } from 'react'
import LogInForm from '../forms/LogInForm'
import { Link } from 'react-router-dom'

class LogIn extends Component {
  render() {
    const { onSubmit } = this.props
    return (
      <div>
        <h1>Log In</h1>
        <LogInForm onSubmit={onSubmit} />

        <p>Dont have an account?</p>
        <Link to="/sign-up">Go to the sign in page</Link>
      </div>
    )
  }
}

export default LogIn
