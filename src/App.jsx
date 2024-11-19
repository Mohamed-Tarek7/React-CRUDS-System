import React, { Component } from 'react'
import Parent from './components/Parent';
import Child from './components/Child';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

export default class App extends Component {
  state = {};
  
  render() {
    return (
      <div>
        <Parent/>
      </div>
    );
  }
}
