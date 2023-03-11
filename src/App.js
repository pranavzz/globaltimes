
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

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
     
     <div>
      {/* pageSize is prop */}
      <News pageSize={6}></News>
     </div>

     <div>
      <Footer></Footer>
     </div>

      </>
    );
  }
}

