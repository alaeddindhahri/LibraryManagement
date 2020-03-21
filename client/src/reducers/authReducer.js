import isEmpty from '../validation/is-empty';
import {SET_CURRENT_USER,ADD_NEW_USER,UPDATE_CURRENT_USER,GET_ERRORS} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  books: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
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
export default authReducer;