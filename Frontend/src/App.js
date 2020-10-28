import React, { Component } from 'react';
import './css/App.css';
import './css/bootstrap.css'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import CookYStories from './mainapp/CookYStories'

class App extends Component {
  render() {
    return (
      <CookYStories/>
   );
  }
}

export default App;