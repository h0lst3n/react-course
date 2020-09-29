import React from 'react';
import {Formik} from 'formik';

export default class FormikForm extends React.Component {

  validate = (values) => {
    const errors = {};
    if (values.lastName === '') {
      errors.lastName = 'LastName is required';
    }
    return errors;
  }

  render() {
    return (
      <div>
        <h2>Formik form:</h2>
        <Formik
          initialValues={{firstName: '', lastName: ''}}
          initialErrors={{firstName: '', lastName: ''}}
          onSubmit={(values, actions) => {
            console.log(JSON.stringify(values));
            actions.setSubmitting(false);
          }}
          validate={this.validate}
        >
          {
            props => (
              <form onSubmit={props.handleSubmit}>
                <label>
                  First Name:
                  <input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.firstName}
                    name="firstName"
                    />
                </label>
                <label>
                   Last Name {props.errors.lastName && "(Can't be empty)"}:
                  <input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.lastName}
                    name="lastName"
                    />
                </label>
                <button type="submit" disabled={!props.isValid}>Submit</button>
              </form>
            )
          }
        </Formik>
      </div>
    );
  }
}
