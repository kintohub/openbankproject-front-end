import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'
import createHistory from 'history/createBrowserHistory'

import SignUpPage from '../signUp/SignUpPage'

import HomeContainer from '../../containers/HomeContainer'
import AboutContainer from '../../containers/AboutContainer'
import configureStore from '../../store'

import styles from './App.module.sass'

const RoutesContainer = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 }
})

class App extends Component {
  // componentDidMount() {
  //   this.props.authorize()
  // }

  render() {
    return (
      <Route
        render={({ location }) => (
          <div id="site-container">
            <div id="content-container">
              <header className={styles.header}>
                <Link to="/">Home</Link>
                <Link to="/log-in">Log In</Link>
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/about-us">About</Link>
              </header>
            </div>

            <PoseGroup>
              <RoutesContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" component={HomeContainer} />
                  <Route exact path="/about-us" component={AboutContainer} />
                  <Route exact path="/log-in" component={AboutContainer} />
                  <Route exact path="/sign-up" component={SignUpPage} />
                </Switch>
              </RoutesContainer>
            </PoseGroup>
          </div>
        )}
      />
    )
  }
}

export default App
