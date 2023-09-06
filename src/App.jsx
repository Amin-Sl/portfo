import React from 'react';
import Experience from './components/experience/Experience';
import Footer from './components/contact/Footer';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';


const App = () => {
  return (
    <>
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
