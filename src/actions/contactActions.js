// bring types
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT } from './types';
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

export const getContact = (id) => async dispatch => {
  // here is where the call to GET API is perform
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
      type: GET_CONTACT,
      payload: response.data
  })
  
};

export const deleteContact = id => async dispatch => {
  // try catch is used bc jsonplaceholder returns status 404 when delete request of new contact
  // bc that contact doesnt exist in the fake api
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch ({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (e) {
    dispatch ({
      type: DELETE_CONTACT,
      payload: id
    });
  }
  
};

export const addContact = contact => async dispatch => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/users', contact);
  dispatch ({
    type: ADD_CONTACT,
    payload: response.data
  });
};

export const updateContact = contact => async dispatch => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact);
  dispatch ({
    type: UPDATE_CONTACT,
    payload: response.data
  });
};
// take this to the Reducer file -> contactReducer
