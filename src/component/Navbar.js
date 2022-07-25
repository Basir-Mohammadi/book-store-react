import './books.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-content">
      <li> BookStore CMS </li>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/Category">CATEGORIES</Link></li>
    </ul>
    <div className="profile">
      <i className="fa fa-user icon" aria-hidden="true" />
    </div>
  </nav>
);

export default Navbar;
