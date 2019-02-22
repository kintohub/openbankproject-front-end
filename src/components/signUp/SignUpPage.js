import React, { Component } from 'react'
import SignUpForm from '../forms/SignUpForm'
class SignUp extends Component {
  render() {
    const { onSubmit } = this.props
    return (
      <div>
        <h1>Sign Up</h1>
        <SignUpForm onSubmit={onSubmit} />
      </div>
    )
  }
}

export default SignUp
