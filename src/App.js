import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home//Home'
import MovieDetail from './components/moviedetail/MovieDetail'
import Navbar from './components/Navbar/Navbar';
import searchResult from './components/search/searchResult';

export function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>

            <Route path='/' component={Home} exact />
            <Route path='/movie/:id' component={MovieDetail} exact />
            <Route path='/search/:id' component={searchResult} />
          </Switch>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
