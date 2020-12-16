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
          <Route path="/home" component={HomePage} exact/>
          <Route path="/paintings" component={PaintingsPage}/>
          <Route path="/sculptures" component={SculpturesPage}/>
          <Route path="/books" component={BooksPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route component={Error}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
