import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

const PERSONAL = [
    {

    }
]

const EXPERIENCE = [
  {
    title: "Web Developer",
    company: "Ascendify",
    time: "June 2017 - Present",
    description: "Deveop Talent Communities using company's widget technology"
  },
  {
    title: "Web Developer",
    company: "Ascendify",
    time: "June 2017 - Present",
    description: "Deveop Talent Communities using company's widget technology"
  },
  {
   title: "Web Developer",
    company: "Ascendify",
    time: "June 2017 - Present",
    description: "Deveop Talent Communities using company's widget technology" 
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Richard Chan</h1>
          <h2 className="App-subtitle">Front End Engineer</h2>
        </header>
        <div className="body">
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}

export default App;
