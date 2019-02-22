import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.sass'

class Home extends Component {
  render() {
    const { isLoggedIn } = this.props
    return (
      <div className={styles.HomePage}>
        <div className={styles.background}>
          <h1>Hello</h1>
          {isLoggedIn ? (
            <p>Welcome to the madness</p>
          ) : (
            <p>
              You need to <Link to="/log-in">LOG IN</Link> or
              <Link to="/sign-up">SIGN UP</Link> first to see the page
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default Home
