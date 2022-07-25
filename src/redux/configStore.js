import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    bookStore: booksReducer,
    categoriesReducer,
  },
});

export default store;
