import React, { Component } from 'react'
import SignUpForm from '../forms/SignUpForm'
class SignUp extends Component {
  render() {
    const { onSubmit } = this.props
    console.log(this.props, 'signup')
    return (
      <div>
        <h1>Sign Up</h1>
        <SignUpForm onSubmit={onSubmit} />
      </div>
    )
  }
}

export default SignUp
