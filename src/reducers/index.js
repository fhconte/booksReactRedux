// Node Modules
import { combineReducers } from 'redux';

// Reducers
import BooksReducer from './reducer-books';
import ActiveBook from './reducer-active-book';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
