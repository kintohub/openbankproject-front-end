import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomField from './CustomField'
import styles from './Forms.module.sass'
class SignUpForm extends Component {
  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.Forms}>
          <div>
            <div className={styles.section}>
              <Field
                name="firstName"
                component={CustomField}
                id="first_name"
                type="text"
                label="First Name"
                placeholder="Junji"
                focusHere={true}
              />
              <Field
                name="lastName"
                component={CustomField}
                id="last_name"
                type="text"
                label="Last Name"
                placeholder="Ito"
              />
            </div>
            <div className={styles.section}>
              <Field
                name="username"
                component={CustomField}
                id="user_name"
                type="text"
                label="User Name"
                placeholder="JunjiItoLovesTomie"
              />
              <Field
                name="email"
                component={CustomField}
                id="email"
                type="email"
                label="Email"
                placeholder="uzumaki@scarymanga.com"
                disabled={submitting}
              />
            </div>
            <div className={styles.password}>
              <Field
                name="password"
                component={CustomField}
                id="password"
                type="password"
                label="Password"
                placeholder="Enter a Password"
              />
            </div>
          </div>
          <p className={styles.password}>
            Your password should EITHER be at least 10 characters long and
            contain mixed numbers and both upper and lower case letters and at
            least one special character, OR be longer than 16 characters
          </p>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signUpForm'
})(SignUpForm)
