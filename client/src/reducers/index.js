import { combineReducers } from "redux";
import authReducer from "./authReducer";
import booksReducer from "./booksReducer";
import usersReducer from "./usersReducer";
// eslint-disable-next-line

export default combineReducers({
  authUser: authReducer,
  users: usersReducer, 
  books: booksReducer
});
