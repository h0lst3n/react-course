import React from 'react';
// import shortid from 'shortid';
import './style.scss';

const GENDER = {
  male: 'male',
  female: 'female'
};

const INITIAL_STATE  = {
  name: '',
  surname: '',
  email: '',
  password: '',
  repeatPassword: '',
  agreed: false,
  isSignupEnable: false,
  gender: GENDER.male,
  age: ''
};

class RegistrationForm extends React.Component {

  state = {...INITIAL_STATE}

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, email, password, gender, age } = this.state;
    const userData = {
      name,
      surname,
      password,
      gender,
      age
    };
    console.log(userData);
  }

  handleReset = (e) => {
    e.preventDefault();
    this.setState({...INITIAL_STATE});
  }

  handleChange = (e) => {
    const { value, type, name } = e.target;
    if (type === 'checkbox') {
      const {checked} = e.target;
      this.setState({
        [name]: checked,
        isSignupEnable: checked
      }, this.validateForm);
    } else {
      this.setState({[name]: value}, this.validateForm);
    }
  };

  validateForm() {
    const {
      name,
      surname,
      email,
      password,
      repeatPassword,
      agreed
    } = this.state;
    const isSugnupEnable = name !== '' &&
      surname !== '' &&
      email !== '' &&
      (password !== '' && password === repeatPassword) &&
      agreed

    this.setState({isSugnupEnable});
  }

  render() {
    const {
      name,
      surname,
      email,
      password,
      repeatPassword,
      agreed,
      gender,
      age,
      isSignupEnable
    } = this.state;
    // const inputId = shortid.generate();
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset} className="signup-form">
        <h2> Sign Up form</h2>
        <label>First name:
          <input type="text" onChange={this.handleChange} placeholder="First name" value={name} name="name"/>
        </label>
        <label>Last name:
          <input type="text" onChange={this.handleChange} placeholder="Last name" value={surname} name="surname"/>
        </label>
        <label>Email:
          <input type="email" onChange={this.handleChange} placeholder="Email" value={email} name="email"/>
        </label>
        <label>Password:
          <input type="password" onChange={this.handleChange} placeholder="Enter password" value={password} name="password"/>
        </label>
        <label>Repeat password:
          <input type="password" onChange={this.handleChange} placeholder="Repeat password" value={repeatPassword} name="repeatPassword"/>
        </label>
        <section>
          <h3>Select your gender:</h3>
          <label>Male
            <input type="radio" onChange={this.handleChange} name="gender" value={GENDER.male} checked={gender === GENDER.male}/>
          </label>
          <label>Female
            <input type="radio" onChange={this.handleChange} name="gender" value={GENDER.female} checked={gender === GENDER.female}/>
          </label>
        </section>
        <label>
          Select your age:
          <select name="age" value={age} onChange={this.handleChange}>
            <option disabled value="">...</option>
            <option value="18-25">18-25</option>
            <option value="25-35">25-35</option>
            <option value="35+">35+</option>
          </select>
        </label>
        {/*<label htmlFor={inputId}>Some field label:</label>
        <input type="text" placeholder="Some field placeholder" id={inputId}/>*/}
        <label>Do you agree with personal data processing ?
          <input type="checkbox" onChange={this.handleChange} checked={agreed} name="agreed"/>
        </label>
        <button type="submit" disabled={!isSignupEnable}>Sign Up</button>
        <button type="reset">Reset</button>
      </form>
    );
  }

}

export default RegistrationForm;
