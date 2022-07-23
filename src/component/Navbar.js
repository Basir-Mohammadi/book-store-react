import './books.css';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-content">
      <li> BookStore CMS </li>
      <li><a href="/">BOOKS</a></li>
      <li><a href="/Category">CATEGORIES</a></li>
    </ul>
    <div className="profile">
      <i className="fa fa-user icon" aria-hidden="true" />
    </div>
  </nav>
);

export default Navbar;
