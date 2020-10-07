import React from 'react';
import './App.css';
import Splash from './components/Splash';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Info from './components/Info';
import Timer from './components/Timer';
import Options from './components/Options';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={Splash} exact />
      <Route path='/home' component={Info} exact />
      <Route path='/timer' component={Timer} exact />
      <Route path='/options' component={Options} exact />
      <Footer />
    </Router>
  );
}

export default App;