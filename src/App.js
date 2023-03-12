
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

// import PropTypes from 'prop-types'


// this is a class based component
// by default it takes function based components

export default class App extends Component {

  // a = "pranav"
  render() {
    return (
      <>
     <div>
      <Navbar></Navbar>
     </div>

     <Router>
      <Routes>
        {/* For path="/" its the home page for which i will pass props as general category */}
        <Route exact path="/" element={<News pageSize={6} country="in" category="general"></News>}></Route>
        <Route exact path="/entertainment" element={<News pageSize={6} country="in" category="entertainment"></News>}></Route>
        <Route exact path="/sports" element={<News pageSize={6} country="in" category="sports"></News>}></Route>
        <Route exact path="/business" element={<News pageSize={6} country="in" category="business"></News>}></Route>
        <Route exact path="/technology" element={<News pageSize={6} country="in" category="technology"></News>}></Route>
      </Routes >
     </Router>

     <div>
      <Footer></Footer>
     </div>

      </>
    );
  }
}

