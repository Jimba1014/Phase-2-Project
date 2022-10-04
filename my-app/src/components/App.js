import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom"
import Form from './Form';
import HomePage from './HomePage';
import Search from './Search';
import NavBar from './NavBar';
import Header from './Header';
import AboutUs from './AboutUs'

function App() {
  const [details, setDetails] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:4000/details')
    .then((res) => res.json())
    .then((data) => setDetails(data))
  }, [])

  function addNewMember(newMember) {
    setDetails([...details, newMember])
  }
  const newPersonArray = details.filter((person) => {
    return person.name?.toLowerCase().includes(search.toLowerCase()) || person.instruments?.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <div className="App">
      <header>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Search search={search} setSearch ={setSearch} />
            <HomePage 
              details = {newPersonArray}
            />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/form">
            <Form addNewMember={addNewMember}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
