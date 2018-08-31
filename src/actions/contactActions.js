// bring types
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';
import axios from 'axios';

/**
 * every call request is made within the actions
 */

// react thunk allow to do the follow
export const getContacts = () => async dispatch => {
  // here is where the call to GET API is perform
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
      type: GET_CONTACTS,
      payload: response.data
  })
  
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
