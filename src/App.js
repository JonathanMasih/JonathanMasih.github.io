import './App.css';
import React from 'react'
import Contact from './components/contact/contact';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contactpage from './components/contact/contactpage/contactpage';
import Experience from './components/experience/experience';

function App() {
  return (
    <div className='app-content'>
      <Contact />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contactpage />
    </div>
  );
}

export default App;
