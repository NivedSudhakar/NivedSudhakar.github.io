import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/pages/Home";
import Projects from './Components/pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Projects" exact Component={Projects} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
