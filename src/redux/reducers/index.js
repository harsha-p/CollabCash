import { combineReducers } from 'redux';
import DummyData from './DummyData';
import userData from './users';
// import groupsReducer from '../groupsReducer'; // Correct path

const rootReducer = combineReducers({
  userData,
  DummyData,
//   groups: groupsReducer, // Add the groups reducer
});

export default rootReducer;