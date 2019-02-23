import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

import HomeContainer from '../../containers/HomeContainer'
import AboutContainer from '../../containers/AboutContainer'
import LogInContainer from '../../containers/LogInContainer'
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
            <NavLink exact activeClassName={styles.active} to="/">
              Home
            </NavLink>
            <NavLink exact activeClassName={styles.active} to="/log-in">
              Log In
            </NavLink>
            <NavLink exact activeClassName={styles.active} to="/sign-up">
              Sign Up
            </NavLink>
            <NavLink exact activeClassName={styles.active} to="/about-us">
              About KintoHub
            </NavLink>
            <button className={styles.link} onClick={signOut}>
              Sign Out
            </button>
          </header>
        </div>
        <PoseGroup>
          <RoutesContainer key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/about-us" component={AboutContainer} />
              <Route exact path="/log-in" component={LogInContainer} />
              <Route exact path="/sign-up" component={SignUpContainer} />
            </Switch>
          </RoutesContainer>
        </PoseGroup>
      </div>
    )
  }
}

export default Dashboard
