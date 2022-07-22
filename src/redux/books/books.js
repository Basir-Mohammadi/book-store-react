import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks, deleteBook, postBook } from '../../API/bookapi';

const ADD_BOOK = 'book-store-react/books/ADD_BOOK';
const FETCH_BOOKS = 'book-store-react/books/FETCH_BOOKS';
const REMOVE_BOOK = 'book-store-react/books/REMOVE_BOOK';

// fetch books from the api
export const fetchBooks = createAsyncThunk(FETCH_BOOKS,
  async () => {
    const response = await getBooks();
    return response;
  });
// add book to api
export const addBook = createAsyncThunk(ADD_BOOK,
  async (bookdetails) => {
    const response = await postBook(bookdetails);
    return response;
  });

// remove book from the api
export const removeBook = createAsyncThunk(REMOVE_BOOK,
  async (bookId) => {
    const response = await deleteBook(bookId);
    return response;
  });

const slice = createSlice({
  name: 'books',
  initialState: [],
  extraReducers: {
    [addBook.fulfilled]: (state, action) => action.payload,
    [fetchBooks.fulfilled]: (state, action) => action.payload,
    [removeBook.fulfilled]: (state, action) => action.payload,
  },
});
export const booksList = (state) => state.bookList;
export default slice.reducer;
