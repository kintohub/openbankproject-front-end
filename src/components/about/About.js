import React, { Component } from 'react'
import styles from './About.module.sass'

class About extends Component {
  render() {
    return (
      <div className={styles.About}>
        <img src="/images/logo-full-color.svg" alt="" />
        <p>
          We are making <b>awesome</b> things at
          <a href="https://www.kintohub.com/"> KintoHub</a>
        </p>
      </div>
    )
  }
}

export default About
