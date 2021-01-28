import {
  ADD_CONTACT,
  DELETE_CONTACT,
  APPLY_FILTER
} from '../actions/contacts.actions';

const initialState = {
  items: [],
  filter: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      const { name, number, id } = action.payload;
      return {
        ...state,
        items: [...state.items, {name, number, id}]
      };
    }
    case DELETE_CONTACT: {
      const { id } = action.payload;

      return {
        ...state,
        items: state.items.filter(contact => contact.id !== id)
      };
    }
    case APPLY_FILTER: {
      const { value: filter } = action.payload;
      return {
        ...state,
        filter
      };
    }
    default:
      return state;
  }
};
