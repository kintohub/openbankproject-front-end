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
          <h2>Log In</h2>
          <LogInForm onSubmit={onSubmit} isUserLoggedIn={isUserLoggedIn} />
          {!isUserLoggedIn ? (
            <p>
              Dont have an account? <br />
              <Link to="/sign-up">Go to the sign in page</Link>
            </p>
          ) : (
            <h1>
              Why not check out <a href="https://www.kintohub.com/">KintoHub</a>{' '}
              in the meantime?
            </h1>
          )}
        </div>
      </div>
    )
  }
}

export default LogIn
