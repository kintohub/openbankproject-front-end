import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomField from './CustomField'

class SignUpForm extends Component {
  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <Field
              name="firstName"
              component={CustomField}
              id="first_name"
              type="text"
              label="First Name"
              placeholder="first name"
              focusHere={true}
            />
            <Field
              name="lastName"
              component={CustomField}
              id="last_name"
              type="text"
              label="Last Name"
              placeholder="first name"
            />
            <Field
              name="password"
              component={CustomField}
              id="password"
              type="password"
              label="Password"
              placeholder="first name"
            />
            <Field
              name="username"
              component={CustomField}
              id="user_name"
              type="text"
              label="User Name"
              placeholder="first name"
            />
            <Field
              name="email"
              component={CustomField}
              id="email"
              type="email"
              label="Email"
              placeholder="first name"
              disabled={submitting}
            />
          </div>
        </div>
        <button type="submit">hit dis</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signUpForm'
})(SignUpForm)
