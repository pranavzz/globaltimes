
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PropTypes from 'prop-types'
// this is a class based component
// by default it takes function based components

export default class App extends Component {

  // a = "pranav"
  render() {
    return (
      <>
      <div>
    
     <div>
      <Navbar></Navbar>
     </div>
     
      <Routes>
        {/* For path="/" its the home page for which i will pass props as general category */}
        <Route exact path="/" element={<News key="general" pageSize={6} country="in" category="general"></News>}></Route>
        <Route exact path="/entertainment" element={<News key="entertainment"  pageSize={6} country="in" category="entertainment"></News>}></Route>
        <Route exact path="/sports" element={<News key="sports"  pageSize={6} country="in" category="sports"></News>}></Route>
        <Route exact path="/business" element={<News key="business"  pageSize={6} country="in" category="business"></News>}></Route>
        <Route exact path="/technology" element={<News key="technology"  pageSize={6} country="in" category="technology"></News>}></Route>
      </Routes >
    
     <div>
      <Footer></Footer>
     </div>
    
      </div>
      </>
    );
  }
}

