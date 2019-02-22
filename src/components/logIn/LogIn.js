import React, { Component } from 'react'
import LogInForm from '../forms/LogInForm'
class LogIn extends Component {
  render() {
    const { onSubmit } = this.props
    return (
      <div>
        <h1>Sign Up</h1>
        <LogInForm onSubmit={onSubmit} />
      </div>
    )
  }
}

export default LogIn
