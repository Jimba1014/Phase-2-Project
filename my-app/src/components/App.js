import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom"
import Form from './Form';
import HomePage from './HomePage';
import Search from './Search';
import NavBar from './NavBar';
import Header from './Header';

function App() {
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/details')
    .then((res) => res.json())
    .then((data) => setDetails(data))
  }, [])

  return (
    <div className="App">
      <header>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage details={details}/>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
