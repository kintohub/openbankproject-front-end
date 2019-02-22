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
          <button type="submit">hit dis</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'logInForm'
})(LoginForm)
