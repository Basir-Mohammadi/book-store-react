import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Progressbar from 'react-js-progressbar';
import { removeBook, fetchBooks } from '../redux/books/books';
import './books.css';

const Book = () => {
  const books = useSelector((state) => state.bookStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [books]);
  return (books.map((book) => (
    <div key={book.id} className="card">
      <div className="main-area">
        <span>Action</span>
        <p className="category">{book.category}</p>
        <h4 className="title">{book.title}</h4>
        <h6 className="author">{book.author}</h6>
        <ul>
          <button className="tranparent-btn" type="button">Comments</button>
          <button
            className="tranparent-btn"
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
          <button className="tranparent-btn" type="button">Edit</button>
        </ul>
      </div>
      <div className="main-area2">
        <div className="progressbar">
          <Progressbar
            input={60}
            pathWidth={5}
            pathColor="#0290ff"
            trailWidth={5}
            trailColor="#e4e4e4"
            textStyle={{ fill: '#0290ff' }}
          />
        </div>

      </div>
      <div className="main-area3 chapter-section ">
        <h4 className="sub-chapter">Current Chapter</h4>
        <h5 className="chapter">Chapter 16</h5>
        <button className="btn" type="button">UPDATE CHAPTER</button>
      </div>
    </div>
  )));
};

export default Book;
