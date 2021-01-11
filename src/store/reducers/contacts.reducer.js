import { ADD_CONTACT, DELETE_CONTACT } from '../actions/contacts.actions';

const initialState = [];

export default (/* previous state */ state = initialState, action) =>  {
  switch (action.type) {
    case ADD_CONTACT: {
      const { number, id, name } = action.payload;
      return [...state, {number, id, name}];
    }
    case DELETE_CONTACT: {
      const { id } = action.payload;
      return state.filter(({ id: contactId }) => contactId !== id);
    }
    default:
      return state;
  }
};

//APP<someState>
// |_
//    ChildComponent
//    ChildComponent
//    ChildComponent
//    ChildComponent<setParentState>
//    |_
//      ChildChildCponent<SetParentState>
