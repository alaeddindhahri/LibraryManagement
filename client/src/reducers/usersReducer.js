import isEmpty from '../validation/is-empty';
import {GET_USERS,ADD_NEW_USER,GET_ERRORS} from '../actions/types';

const initialState = {
  users:[]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};
export default usersReducer;