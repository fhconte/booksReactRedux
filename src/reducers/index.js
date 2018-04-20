// Node Modules
import { combineReducers } from 'redux';

// Reducers
import BooksReducer from './reducer-books';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  books: BooksReducer
});

export default rootReducer;
