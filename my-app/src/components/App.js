import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Form from './Form';
import HomePage from './HomePage';
import Search from './Search';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
