import React from 'react';
import { Switch, Route } from "react-router-dom"
import '../App.css';
import Form from './Form';
import HomePage from './HomePage';
import Search from './Search';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          {/* <Route path="/form"> */}
            {/* <Form /> */}
          {/* </Route> */}
        </Switch>
      </header>
    </div>
  );
}

export default App;
