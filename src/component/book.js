import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './books.css';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  return (books.map((book) => (
    <div key={book.id} className="card">
      <div className="main-area">
        <span>Action</span>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <ul>
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeBook(book.id));
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
