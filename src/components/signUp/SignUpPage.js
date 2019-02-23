import React, { Component } from 'react'
import SignUpForm from '../forms/SignUpForm'
import styles from './SignUp.module.sass'

class SignUp extends Component {
  render() {
    const { onSubmit, isUserLoggedIn } = this.props
    return (
      <div className={styles.SignUp}>
        <div>
          <h1>Sign Up</h1>
          {isUserLoggedIn ? (
            <h2>
              {' '}
              You are already logged in!
              <br />
              To log in with another account sign out and sign up again.
            </h2>
          ) : (
            <SignUpForm onSubmit={onSubmit} />
          )}
        </div>
      </div>
    )
  }
}

export default SignUp
