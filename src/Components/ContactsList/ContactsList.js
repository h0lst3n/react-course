import React, { useCallback, useMemo } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../store/actions/contacts.actions';

import { filteredContactsSelector } from '../../store/selectors/contacts.selector';

import ContactItem from './ContactItem';

const ContactsList = () => {
  const contacts = useSelector(filteredContactsSelector);
  const dispatch = useDispatch();
  const onDelete = useCallback(id => {
    dispatch(deleteContact(id))
  }, [dispatch]);

  const contactsList = useMemo(() =>
    contacts.length > 0
      ? contacts.map(({ name, number, id }) => <ContactItem key={id}
        name={name}
        number={number}
        id={id}
        onDelete={onDelete}
      />)
      : <li>The are no contacts added yet</li>
    , [contacts, onDelete]
  );
  return (
    <div>
      <h2>Contacts list:</h2>
      <ul>
        {contactsList}
      </ul>
    </div>
  );
};

export default ContactsList;

// class ContactsList extends React.Component {
//
//   onContactDelete = (id) => {
//     this.props.deleteContact(id);
//   }
//
//   render() {
//     const { contacts } = this.props;
//
//     return (
//     <div>
//       <h2>Contacts list:</h2>
//       <ul>
//         {
//           contacts.length > 0
//             ? contacts.map(({name, number, id}) =>
//               <ContactItem
//                 key={id}
//                 name={name}
//                 number={number}
//                 id={id}
//                 onDelete={this.onContactDelete}/>
//             )
//             : <li>The are no contacts added yet</li>
//         }
//       </ul>
//     </div>
//     );
//   }
// }
//
// const mapStateToProps = state => ({
//   contacts: filteredContactsSelector(state)
// });
//
// export default connect(mapStateToProps, { deleteContact })(ContactsList);
