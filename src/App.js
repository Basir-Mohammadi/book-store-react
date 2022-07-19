import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Navbar from './component/Navbar';
import Books from './component/books';
import Category from './component/category';
import Form from './component/form';
import './component/books.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Books />
            </Route>
            <Route path="/category">
              <Category />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
