import React from 'react';
import './App.css';
import Splash from './components/Splash';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Info from './components/Info';
import Timer from './components/Timer';
import Tools from './components/Tools';
import Methods from './components/userInfo/Methods';
import Profile from './components/userInfo/Profile';
import Accountable from './components/userInfo/Accountable';
import Exertion from './components/userInfo/Exertion';
import Nutrients from './components/userInfo/Nutrients';
import Review from './components/userInfo/Review';
import Sustenance from './components/userInfo/Sustenance';
import Support from './components/userInfo/Support';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={Splash} exact />
      <Route path='/home' component={Info} exact />
      <Route path='/timer' component={Timer} exact />
      <Route path='/tools' component={Tools} exact />
      <Route path='/tools/profile' component={Profile} exact />
      <Route path='/tools/accountable' component={Accountable} exact />
      <Route path='/tools/exertion' component={Exertion} exact />
      <Route path='/tools/methods' component={Methods} exact />
      <Route path='/tools/nutrients' component={Nutrients} exact />
      <Route path='/tools/review' component={Review} exact />
      <Route path='/tools/support' component={Support} exact />
      <Route path='/tools/sustenance' component={Sustenance} exact />
      <Footer />
    </Router>
  );
}

export default App;