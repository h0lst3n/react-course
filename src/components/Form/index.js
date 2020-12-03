import React from 'react';
// import shortid from 'shortid';

const GENDER = {
  MALE: 'male',
  FEMALE: 'female'
};

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  agreed: false,
  gender: null,
  age: '',
  isSubmitEnable: false
};

class Form extends React.Component {

  state = {...INITIAL_STATE};

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState(
      {[name]: type === 'checkbox' ? checked : value},
      this.validateForm
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.handleReset();
  };

  handleReset = () => {
    this.setState({...INITIAL_STATE});
  };

  validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      agreed,
      gender
    } = this.state;

    const isSubmitEnable = firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      gender &&
      agreed;
    this.setState({isSubmitEnable});
  }

  render() {
    // const id = shortid.generate();
    // console.log(id);
    const {
      firstName,
      lastName,
      email,
      agreed,
      gender,
      age,
      isSubmitEnable
    } = this.state;

    return (
      <form>
        <fieldset>
          <label htmlFor="firstName">
            First name:
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              value={firstName}
              name="firstName"
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="lastName">
            Last name:
            <input
              id="lastName"
              type="text"
              placeholder="Last name"
              value={lastName}
              name="lastName"
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="agreed">
            Do you agree with processing of your personal data?
            <input
              id="agreed"
              type="checkbox"
              name="agreed"
              value={agreed}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <h2>Pease choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              name="gender"
              checked={gender === GENDER.MALE}
              value={GENDER.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              checked={gender === GENDER.FEMALE}
              value={GENDER.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>Please choose your age
            <select name="age" value={age} onChange={this.handleChange}>
              <option value='' disabled>...</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </label>

        </fieldset>
        <button type="submit" onClick={this.handleSubmit} disabled={!isSubmitEnable}>Submit</button>
        <button type="reset" onClick={this.handleReset}>Reset</button>
      </form>
    );
  }
}

export default Form;
