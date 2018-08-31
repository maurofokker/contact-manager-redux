// bring types
import { GET_CONTACTS } from './types';

export const getContacts = () => {
  // here is where the call to GET API is perform
  return {
    type: GET_CONTACTS
  };
};
