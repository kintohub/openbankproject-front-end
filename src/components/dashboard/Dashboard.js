import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

import HomeContainer from '../../containers/HomeContainer'
import AboutContainer from '../../containers/AboutContainer'
import SignUpContainer from '../../containers/SignUpContainer'

import styles from './Dashboard.module.sass'

const RoutesContainer = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 }
})

class Dashboard extends Component {
  render() {
    const { location, signOut } = this.props
    return (
      <div id="site-container">
        <div id="content-container">
          <header className={styles.header}>
            <Link to="/">Home</Link>
            <Link to="/log-in">Log In</Link>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/about-us">About</Link>
            <button className={styles.link} onClick={this.props.signOut}>
              Sign Out
            </button>
          </header>
        </div>
        <PoseGroup>
          <RoutesContainer key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/about-us" component={AboutContainer} />
              <Route exact path="/log-in" component={AboutContainer} />
              <Route exact path="/sign-up" component={SignUpContainer} />
            </Switch>
          </RoutesContainer>
        </PoseGroup>
      </div>
    )
  }
}

export default Dashboard
