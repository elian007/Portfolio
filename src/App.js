import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Index from './Components/Index'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
