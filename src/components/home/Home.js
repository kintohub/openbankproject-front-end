import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.sass'

class Home extends Component {
  render() {
    const { isLoggedIn, details } = this.props
    return (
      <div className={styles.HomePage}>
        <div>
          <h1>Hello!</h1>
          {isLoggedIn ? (
            <div>
              {details && (
                <div>
                  <h2>
                    Welcome <b>{details.username}</b>
                  </h2>
                  <h3>
                    This is the information we retrieved from the Open Banking
                    API{' '}
                    <span role="img" aria-label="ladydancing">
                      🚀
                    </span>
                  </h3>
                  <p>
                    <b>{'{'}</b>
                  </p>
                  <div className={styles.indented}>
                    <p>
                      <b>user_id: </b>
                      {details.user_id}
                    </p>
                    <p>
                      <b>email: </b>
                      {details.email}
                    </p>
                    <p>
                      <b>provider_id: </b>
                      {details.provider_id}
                    </p>
                    <p>
                      <b>provider: </b>
                      {details.provider}
                    </p>
                    <p>
                      <b>username: </b>
                      {details.username}
                    </p>
                  </div>
                  <p>
                    <b>{'}'}</b>
                  </p>
                </div>
              )}
            </div>
          ) : (
            <p>
              You need to <Link to="/log-in">LOG IN</Link> or{' '}
              <Link to="/sign-up">SIGN UP</Link> first to see your user details.
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default Home
