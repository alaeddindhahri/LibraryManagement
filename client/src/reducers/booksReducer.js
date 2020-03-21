import isEmpty from '../validation/is-empty';
import {GET_BOOKS,UPDATE_BOOK,DELETE_BOOK,GET_ERRORS} from '../actions/types';

const initialState = {
  books: []
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload
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
export default booksReducer;