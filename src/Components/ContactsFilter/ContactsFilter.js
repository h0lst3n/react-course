import React, { useCallback } from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { applyFilter } from '../../store/actions/contacts.actions';

const ContactsFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);
  const onChange = useCallback(
    e => dispatch(applyFilter(e.target.value)),
    [dispatch]
  );
  
  return (
    <div>
      <h2>Filter: </h2>
      <input
        type="text"
        placeholder="Enter name to search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ContactsFilter;

// const ContactsFilter = ({ value, applyFilter }) => (
//   <div>
//     <h2>Filter: </h2>
//     <input
//       type="text"
//       placeholder="Enter name to search"
//       value={value}
//       onChange={e => applyFilter(e.target.value)}
//     />
//   </div>
// );
//
// const mapStateToProps = state => ({
//   value: state.contacts.filter
// });
//
// export default connect(mapStateToProps, { applyFilter })(ContactsFilter);
