import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  books: BooksReducer
});

export default rootReducer;
