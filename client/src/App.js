import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from './components/nav';
import saved from './components/save';
import search from './components/search';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Route exact path="/" component={saved}/>
        <Route exact path="/saved" component={saved}/>
        <Route exact path="/search" component={search}/>
      </div>
    </Router>
  );
}


export default App;
