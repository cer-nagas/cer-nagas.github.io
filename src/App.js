import './App.css';
import MainNavbar from './components/MainNavbar';
import HomePage from './components/home/HomePage';
import Error from './components/Error';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SculpturesPage from './components/sculptures/SculpturesPage';
import PaintingsPage from './components/paintings/PaintingsPage';
import BooksPage from './components/books/BooksPage';
import ContactPage from './components/contact/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNavbar />
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/paintings">
            <PaintingsPage/>
          </Route>
          <Route path="/sculptures">
            <SculpturesPage/>
          </Route>
          <Route path="/books">
            <BooksPage/>
          </Route>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route>
            <Error/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
