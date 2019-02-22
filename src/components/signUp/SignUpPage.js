import React, { Component } from 'react'
import SignUpForm from '../forms/SignUpForm'
import styles from './SignUp.module.sass'

class SignUp extends Component {
  render() {
    const { onSubmit } = this.props
    return (
      <div className={styles.SignUp}>
        <div>
          <h1>Sign Up</h1>
          <SignUpForm onSubmit={onSubmit} />
        </div>
      </div>
    )
  }
}

export default SignUp
