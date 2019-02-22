import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomField from './CustomField'
import styles from './Forms.module.sass'

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <div className={styles.Forms}>
        <form onSubmit={handleSubmit}>
          <div className={styles.section}>
            <Field
              name="password"
              component={CustomField}
              id="password"
              type="password"
              label="Password"
              placeholder="Enter a password"
            />
            <Field
              name="username"
              component={CustomField}
              id="user_name"
              type="text"
              label="User Name"
              placeholder="JunjiItoLovesTomie"
            />
          </div>
          <p className={styles.password}>
            Your password should EITHER be at least 10 characters long and
            contain mixed numbers and both upper and lower case letters and at
            least one special character, OR be longer than 16 characters
          </p>
          <button type="submit">Log In</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'logInForm'
})(LoginForm)
