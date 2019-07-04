import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Work from '../Components/Work'
import Portfolio from '../Components/Portfolio'
import Profile from '../Components/Profile'
import Index from '../Components/Index'
import Blog from '../Components/Blog'
import Contact from '../Components/Contact'

function Routes (){
  return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/Work' component={Work} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/Profile' component={Profile} />
        <Route path='/Blog' component={Blog} />
        <Route path='/Contact' component={Contact}/>
      </BrowserRouter>
    
  );
}


export default Routes
