import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Series from './Series'
import Movies from './Movies'
import Home from './Home'
import {BrowserRouter as Roueter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Roueter>
    <div className="App">
      <Nav />
      <Switch>
      <Route  path="/ReactRouting/" exact component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/series" component={Series} />
      </Switch>
    </div>
    </Roueter>
  );
}


export default App;
