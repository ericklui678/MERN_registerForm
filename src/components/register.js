import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../actions/';

class Register extends Component {
  renderField(field) {
    return (
      <div className='form-group'>
        <label htmlFor={field.customID}>{field.label}</label>
        <input
          className='form-control'
          type={field.type}
          id={field.customID}
          {...field.input}
        />
      </div>
    )
  }

  onSubmit(values) {
    this.props.createUser(values);
  }

  render() {
    // this.props.handleSubmit is a property passed here component from redux-form
    // setting it to var handleSubmit instead of this.props.handleSubmit
    const { handleSubmit } = this.props;

    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label='First Name'
            name='first_name'
            customID='first_name'
            type='text'
            component={this.renderField}
          />
          <Field
            label='Last Name'
            name='last_name'
            customID='last_name'
            type='text'
            component={this.renderField}
          />
          {/* <Field
            label='Email Address'
            name='email'
            customID='email'
            type='text'
            component={this.renderField}
          />
          <Field
            label='Enter password'
            name='password'
            customID='password'
            type='password'
            component={this.renderField}
          /> */}
          <button type='submit' className='btn btn-primary'>Submit</button>
          <Link to='/' className='btn btn-secondary'>Cancel</Link>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'RegisterForm'
})(
  connect(null, { createUser })(Register)
);
