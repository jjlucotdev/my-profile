import React from 'react';
import NavBar from './components/NavBar'; 
import Home from './pages/Home'; 
import About from './pages/About'; 

export default function App() {
  return (
    <>
      <NavBar /> 
      <div className="background-container"></div>
      <div id="home">
        <Home />
      </div>
      <div id="about" className='bg-light'>
        <About />
      </div>
    </>
  );
}
