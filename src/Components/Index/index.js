import React, {Fragment} from 'react';

import Home from './../Home'
import About from './../About'
import Profile from './../Profile'
import Portfolio from './../Portfolio'
import SocialMedia from './../SocialMedia'
import Work from './../Work'
import Footer from './../Footer'

function Index() {
  return (
    <Fragment>
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <SocialMedia />
      <Footer />

    </Fragment>
  );
}

export default Index;
