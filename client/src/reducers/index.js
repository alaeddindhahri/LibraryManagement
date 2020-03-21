import { combineReducers } from "redux";
import authReducer from "./authReducer";
import booksReducer from "./booksReducer";
// eslint-disable-next-line

export default combineReducers({
  authUser: authReducer,
  books: booksReducer
});
