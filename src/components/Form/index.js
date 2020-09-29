import React from 'react';
import shortid from 'shortid';

import css from './style.module.scss';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  agree: false,
  gender: null,
  age: '',
  isSubmitDisabled: true,
  errors: {}
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female'
};

export default class Form extends React.Component {

  state = {...INITIAL_STATE};

  handleChange = (e) => {
    const {name, value, type, checked} = e.target;

    this.setState({[name]: type === 'checkbox' ? checked : value}, this.checkIsSubmitDisabled);
  }

  checkIsSubmitDisabled = () => {
    const {password, repeatPassword, firstName, agree, email} = this.state;
    const errors = {};
    const isSubmitDisabled = password !== repeatPassword ||
      firstName === '' || !agree || email === '';
    if (firstName === '') {
      errors.firstName = 'First name should not be empty';
    }
    if (password === '' || password !== repeatPassword) {
      errors.password = 'Password should not be empty and equal to repeat password';
    }
    this.setState({isSubmitDisabled, errors});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(this.state));
  }

  handleReset = () => {
    this.setState(this.INITIAL_STATE);
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      repeatPassword,
      agree,
      gender,
      age,
      isSubmitDisabled,
      errors
    } = this.state;
    const firstNameInputId = shortid.generate();
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset} className={css['signup-form']}>
        <label htmlFor={firstNameInputId}>
          First name:
          <input type="text" id={firstNameInputId} name="firstName" value={firstName} onChange={this.handleChange}/>
          {errors.firstName && <span className={css['error-message']}>{errors.firstName}</span>}
        </label>
        <label>
          Last name:
          <input type="text" name="lastName" value={lastName} onChange={this.handleChange}/>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={this.handleChange}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={this.handleChange}/>
        </label>
        <label>
          Repeat password:
          <input type="password" name="repeatPassword" value={repeatPassword} onChange={this.handleChange}/>
        </label>
        <label>
          Agree to terms
          <input type="checkbox" name="agree" checked={agree} onChange={this.handleChange}/>
        </label>
        <section>
          <h3>Choose your gender</h3>
          <label>
            Male
            <input type="radio" name="gender" value={Gender.MALE} checked={gender === Gender.MALE} onChange={this.handleChange}/>
          </label>
          <label>
            Female
            <input type="radio" name="gender" value={Gender.FEMALE} checked={gender === Gender.FEMALE} onChange={this.handleChange}/>
          </label>
        </section>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>...</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <button type="submit" disabled={isSubmitDisabled}>Submit form</button>
        <button type="reset">Reset form</button>
      </form>
    );
  }
}
