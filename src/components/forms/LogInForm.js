import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomField from './CustomField'

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <div>
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
          </div>
        </div>
        <button type="submit">hit dis</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'logInForm'
})(LoginForm)
