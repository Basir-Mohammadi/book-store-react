import { useDispatch } from 'react-redux/es/exports';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { addBook, fetchBooks } from '../redux/books/books';
import './books.css';

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    item_id: uniqid(),
    title: '',
    author: '',
    category: '',
  });

  const handleChanges = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(state));
    setState({
      item_id: uniqid(),
      title: '',
      author: '',
      category: '',
    });
    dispatch(fetchBooks());
    e.target.reset();
  };

  return (
    <form className="forms" onSubmit={handleSubmit}>
      <input value={state.author} type="text" name="author" onChange={handleChanges} placeholder="Author" required />
      <input value={state.title} type="text" name="title" onChange={handleChanges} placeholder="Book" required />
      <select value={state.category} name="category" onChange={handleChanges}>
        <option value="History">History</option>
        <option value="Language">Language</option>
        <option value="Romance">Romance</option>
        <option value="Mystery">Mystery</option>
        <option value="Science">Science</option>
        <option value="Technology">Technology</option>
      </select>
      <button type="submit">Add New</button>
    </form>
  );
};

export default Form;
