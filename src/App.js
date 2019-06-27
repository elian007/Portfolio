import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Work from './Components/Work'
import Portfolio from './Components/Portfolio'
import About from './Components/About'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Home} />

        <Route path='/Work' component={Work} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/About' component={About} />

        <Route path='/Contact' component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
