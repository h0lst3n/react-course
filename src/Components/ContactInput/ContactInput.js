import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from '../../store/actions/contacts.actions';

// class ContactInput extends React.Component {
//
//   state = {
//     name: '',
//     number: '',
//     isAddDisable: true
//   };
//
//   handleChange = (e) => {
//     const { name, value } = e.target;
//
//     this.setState({ [name]: value }, this.setIsAddEnable);
//   };
//
//   setIsAddEnable = () => {
//     const { name, number } = this.state;
//     this.setState({
//       isAddDisable: name === '' || number === ''
//     });
//   }
//
//   addContact = () => {
//     const { name, number } = this.state;
//
//     this.props.addContact({name, number});
//   };
//
//   render() {
//     const { name, number, isAddDisable } = this.state;
//     return (
//       <div>
//         <h2>Add contact</h2>
//
//         <div>
//           <label htmlFor="contact-name">
//             Contact name:
//             <input
//               type="text"
//               id="contact-name"
//               placeholder="Enter contact name"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>
//         </div>
//
//         <div>
//           <label htmlFor="contact-number">
//             Contact number:
//             <input
//               type="text"
//               id="contact-number"
//               placeholder="Enter contact number"
//               name="number"
//               value={number}
//               onChange={this.handleChange}
//             />
//           </label>
//         </div>
//
//         <div>
//           <button
//             type="button"
//             onClick={this.addContact}
//             disabled={isAddDisable}
//           >
//             Add contact
//           </button>
//         </div>
//
//       </div>
//     );
//   }
// }

const ContactInput = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [isAddDisabled, setIsAddDisabled] = useState(true);

  const dispatch = useDispatch();

  const onNameChange = useCallback((e) => {
    const { value } = e.target;
    setName(oldName => {
      // console.log('old name', oldName);
      return value;
    });
  }, [setName]);

  const addingTitle = useMemo(() =>
    `Add contact${name !== '' ? ` :${name}` : ''}`,
    [name]
  );

  const onNumberChange = useCallback(
    (e) => setNumber(e.target.value),
    [setNumber]
  );

  const handleAdd = useCallback(
    () => {
      dispatch(addContact({number, name}))
    },
    [dispatch, number, name]
  );

  /* componentDidMount */
  // useEffect(() => {
  //   console.log('componentDidMount');
  // }, []);
  //
  // /* componentDidUpdate */
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // }, [number]);
  //
  // /* componentWillUnmount */
  // useEffect(() => {
  //   return function() {
  //     console.log('componentWillUnmount');
  //   };
  // }, []);

  useEffect(() => {
    setIsAddDisabled(name === '' || number === '');
  }, [name, number]);

  return (
    <div>
      <h2>{addingTitle}</h2>

      <div>
        <label htmlFor="contact-name">
          Contact name:
          <input
            type="text"
            id="contact-name"
            placeholder="Enter contact name"
            name="name"
            value={name}
            onChange={onNameChange}
          />
        </label>
      </div>

      <div>
        <label htmlFor="contact-number">
          Contact number:
          <input
            type="text"
            id="contact-number"
            placeholder="Enter contact number"
            name="number"
            value={number}
            onChange={onNumberChange}
          />
        </label>
      </div>

      <div>
        <button
          type="button"
          disabled={isAddDisabled}
          onClick={handleAdd}
        >
          Add contact
        </button>
      </div>

    </div>
  );
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addContact: ({name, number}) => dispatch(addContact({name, number}))
//   }
// };

// export default connect(null, /*mapDispatchToProps*/{ addContact })(ContactInput);
//
export default ContactInput;
