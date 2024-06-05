import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <NavBar />
      <div className="background-container"></div>
      <div id="home"  className='py-5'>
        <Home />
      </div>
      <div id="about" className='custom-bg-light py-5'>
        <About />
      </div>
      <div id="skills" className='custom-bg-light py-5'>
        <Skills />
      </div>
      <div id="experiences" className='custom-bg-light py-5 backdrop'>
        <Experiences />
      </div>
      <div id="contact" className='custom-bg-blue py-5'>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
