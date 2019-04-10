import React, { Component } from 'react';
import 'react-router';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import AddAuthor from './component/AddAuthor/AddAuthor';
import AddQuote from './component/AddQuote/AddQuote';
import AuthorListDisplay from './component/AuthorListDisplay/AuthorListDisplay';
import QuoteListDisplay from './component/QuoteListDisplay/QuoteListDisplay';
import UpdateAuthor from './component/UpdateAuthor/UpdateAuthor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Quote Ranks</h1>
        <BrowserRouter>
          <div className="navigation">
              <Route exact path='/' render={() => <Redirect to='/home' />} />
              <Route path='/home' Component={AuthorListDisplay} />
              <Route path='/new' Component={AddAuthor} />
              <Route path='/quotes/:id' Component={QuoteListDisplay} />
              <Route path='/write/:id' Component={AddQuote} />
              <Route path='/edit' Component={UpdateAuthor} />
          </div>
        </BrowserRouter>
        <AuthorListDisplay />
      </div>
    );
  }
}

export default App;
