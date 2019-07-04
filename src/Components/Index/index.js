import React, {Fragment} from 'react';
import Home from './../Home'
import Profile from './../Profile'
import Portfolio from './../Portfolio'
import SocialMedia from './../SocialMedia'
import Work from './../Work'
import Footer from './../Footer'
import Blog from './../Blog'
import Contact from './../Contact'

function Index() {
  return (
    <Fragment>
      <Home />
      <Profile />
      <Work />
      <Portfolio />
      <Blog />
      <Contact />
      <SocialMedia />
      <Footer />
    </Fragment>
  );
}

export default Index;
