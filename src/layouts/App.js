import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Aside from './Aside'
import Header from './Header'
import Footer from './Footer'
import Page from './Page'

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header><Header /></header>
          <main>
            <aside><Aside /></aside>
            <div className="page"><Page /></div>
          </main>
          <footer><Footer /></footer>
        </div>
      </Router>
    );
  }
}

export default App;
