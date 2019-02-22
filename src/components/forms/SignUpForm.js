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
          <button type="submit">hit dis</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signUpForm'
})(SignUpForm)
