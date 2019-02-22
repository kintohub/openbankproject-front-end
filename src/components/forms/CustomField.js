import React, { Component } from 'react'

class CustomField extends Component {
  render() {
    const {
      input,
      placeholder,
      label,
      type,
      className,
      focusHere,
      id,
      disabled
    } = this.props
    const { touched, submitFailed, error } = this.props.meta
    const hasError = (touched || submitFailed) && error
    let localClassName
    if (hasError) {
      localClassName = `${className} error`
    }

    const inputEl = (
      <input
        {...input}
        id={id || input.name}
        type={type}
        placeholder={placeholder}
        className={`${localClassName}`}
        autoFocus={!!focusHere}
        disabled={disabled}
      />
    )

    return (
      <div>
        <div className="label">
          <label htmlFor="">{label}</label>
        </div>
        <div className="field-wrapper">{inputEl}</div>
        {hasError && <div className="error-message">{error}</div>}
      </div>
    )
  }
}

export default CustomField
