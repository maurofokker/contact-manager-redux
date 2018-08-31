// bring types
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';

export const getContacts = () => {
  // here is where the call to GET API is perform
  return {
    type: GET_CONTACTS
  };
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};

export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};

// take this to the Reducer file -> contactReducer
