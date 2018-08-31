import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT } from '../actions/types';
// this come from actions related to contact type

const initialState = {
  contacts: [],
  contact: {} // the actual contact
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload  // retrieve from dispatch on contactActions.js
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload  // retrieve from dispatch on contactActions.js
      };
    case DELETE_CONTACT:
      return {
        ...state,
        // filter contacts from payload (id is the payload)
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}
