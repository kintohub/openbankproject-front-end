import React, { Component } from 'react'
import styles from './About.module.sass'

class About extends Component {
  render() {
    return (
      <div className={styles.About}>
        <div>
          <div className={styles.imageWrapper}>
            <img src="/images/logo-full-color.svg" alt="" />
          </div>
        </div>
        <div>
          <h1>
            We are making <b>AWESOME</b> things at <br />
            <a href="https://www.kintohub.com/">KintoHub</a>
          </h1>
          <p>
            Empowering Developers to build, deploy and scale Websites, APIs &
            Microservices without needing to learn Kubernetes. Connect a git
            repo and push your code to start sharing features in any programming
            language now for FREE.
          </p>
          <a href="https://join.slack.com/t/kintohub/shared_invite/enQtMzIxNDU2OTE4NTYyLWJmNWM1ZTQ3YTFlMzJkYWUzMWE2ZTlmZjk3ZGQ1NWFlMDRkYzhhODNmNDZlMDZmNjhlMzBhNWRiYWIxMTVjMmU">
            <div className={styles.slack}>
              <p>Questions? Dad Jokes? Join us on Slack!</p>

              <img src="/images/icon-slack-community-small.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default About
