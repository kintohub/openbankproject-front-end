import React, { Component } from 'react'

class Home extends Component {
  render() {
    const { isLoggedIn } = this.props
    return (
      <div>
        <h1>Hello</h1>
        {isLoggedIn ? (
          <p>Welcome to the madness</p>
        ) : (
          <p>You need to log in first to see the page</p>
        )}
      </div>
    )
  }
}

export default Home
