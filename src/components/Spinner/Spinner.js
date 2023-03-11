import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center items-center'>
        <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" width="100" height="100"/>
         {/* <img src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-0.jpg" alt="loading" width="100" height="100"/> */}
      </div>
    )
  }
}

// https://icon-library.com/images/loading-gif-icon/loading-gif-icon-0.jpg
