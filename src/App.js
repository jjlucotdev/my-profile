import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Skills from './pages/Skills';

export default function App() {
  return (
    <>
      <NavBar />
      <div className="background-container"></div>
      <div id="home"  className='py-5'>
        <Home />
      </div>
      <div id="skills" className='bg-light py-5'>
        <Skills />
      </div>
      <div id="experiences" className='bg-secondary py-5'>
        <Experiences />
      </div>
      <div id="contact" className='bg-dark py-5'>
        {/* Contact Component */}
      </div>
    </>
  );
}
