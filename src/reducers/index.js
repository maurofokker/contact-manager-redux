import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

// here is a meeting place for all the reducers

export default combineReducers({
  contact: contactReducer
});