import './App.css';
import MainNavbar from './components/navbar/MainNavbar';
import HomePage from './components/pages/HomePage';
import ErrorPage from './components/pages/ErrorPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SculpturesPage from './components/pages/SculpturesPage';
import PaintingsPage from './components/pages/PaintingsPage';
import BooksPage from './components/pages/BooksPage';
import ContactPage from './components/pages/ContactPage';

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
            <ErrorPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
