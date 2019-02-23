import React, { Component } from 'react'
import LogInForm from '../forms/LogInForm'
import { Link } from 'react-router-dom'
import styles from './LogIn.module.sass'

class LogIn extends Component {
  render() {
    const { onSubmit, isUserLoggedIn } = this.props
    return (
      <div className={styles.HomePage}>
        <div>
          <h1>Log In</h1>
          {!isUserLoggedIn ? (
            <>
              <LogInForm onSubmit={onSubmit} />
              <p>
                Dont have an account? <br />
                <Link to="/sign-up">Go to the sign in page</Link>
              </p>
            </>
          ) : (
            <>
              <h2>You are already logged in!</h2>
              <p>
                Why not check out{' '}
                <a href="https://www.kintohub.com/">KintoHub</a> in the
                meantime?
              </p>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default LogIn
