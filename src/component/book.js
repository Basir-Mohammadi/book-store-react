import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/books';
import './books.css';

const Book = () => {
  const books = useSelector((state) => state.bookStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (books.map((book) => (
    <div key={book.id} className="card">
      <div className="main-area">
        <span>Action</span>
        <p>{book.category}</p>
        <h4>{book.title}</h4>
        <h6>{book.author}</h6>
        <ul>
          <button type="button">Comments</button>
          <button
            type="button"
            id={book.id}
            value="Remove"
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeBook(e.target.id));
              dispatch(fetchBooks());
            }}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </ul>
      </div>
      <div className="main-area2">
        <h4>60%</h4>
      </div>
      <div className="main-area3">
        <h4>Current Chapter</h4>
        <h5>Chapter 16</h5>
        <button type="button">UPDATE CHAPTER</button>
      </div>
    </div>
  )));
};

export default Book;
