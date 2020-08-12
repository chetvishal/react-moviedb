import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home//Home'
import MovieDetail from './components/moviedetail/MovieDetail'

export function App() {
  return (
    <main>
      <BrowserRouter>
        <div>
          <Switch>

            <Route path='/' component={Home} exact />
            <Route path='/movie/:id' component={MovieDetail} exact />
            
          </Switch>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
