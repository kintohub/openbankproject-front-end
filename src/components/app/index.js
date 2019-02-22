import React from 'react'
import { Route, Link } from 'react-router-dom'

import SignUpPage from '../signUp/SignUpPage'

import HomeContainer from '../../containers/HomeContainer'
import AboutContainer from '../../containers/AboutContainer'

import styles from './App.module.sass'
const App = () => (
  <div>
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/log-in">Log In</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/about-us" component={AboutContainer} />
      <Route exact path="/log-in" component={AboutContainer} />
      <Route exact path="/sign-up" component={SignUpPage} />
    </main>
  </div>
)

export default App
