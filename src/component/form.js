import { useDispatch } from 'react-redux/es/exports';
import React, { useRef } from 'react';
import uniqid from 'uniqid';
import { addBook } from '../redux/books/books';
import './books.css';

const Form = () => {
  const dispatch = useDispatch();
  const title = useRef(null);
  const author = useRef(null);
  return (
    <form className="forms" onSubmit={(e) => { e.preventDefault(); dispatch(addBook(title.current.value, author.current.value, uniqid())); e.target.reset(); }}>
      <input ref={title} type="text" name="author" placeholder="Author" />
      <input ref={author} type="text" name="book" placeholder="Book" />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
