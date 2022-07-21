import { useSelector, useDispatch } from 'react-redux/es/exports';
import './books.css';
import { CheckStatus } from '../redux/categories/categories';

const Category = () => {
  const response = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(CheckStatus())}>Check status</button>
      <p>{response}</p>
    </div>
  );
};

export default Category;
