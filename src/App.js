import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/pages/Home";
import Projects from './Components/pages/Projects';
import Experience from './Components/pages/Experience'

function App() {
  return (
    <>
      <Router basename='NivedSudhakar.github.io'>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Projects" exact Component={Projects} />
          <Route path="/Experience" exact Component={Experience} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
