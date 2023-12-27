import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CiSquarePlus, CiSquareMinus, CiUser, CiHome, CiDesktop } from "react-icons/ci";

// Import page components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import PMA from './components/pages/PMA';
import Bruinwalk from './components/pages/Bruinwalk';
import Mobile from './components/pages/Mobile';
import SpringSing from './components/pages/SpringSing';

// Define Navbar
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const iconSizeLg = '45px';
  const iconSizeMd = '30px';

  return (
    <nav className='flex p-5'>
      <button onClick={()=> setIsOpen(!isOpen)} className='text-xl'>
        { isOpen ? <CiSquareMinus size={iconSizeLg}/> : <CiSquarePlus size={iconSizeLg}/>} 
      </button>

      {isOpen && (
        <div className='flex items-center mx-1'>
          <Link to="/" onClick={()=> setIsOpen(false)} className='ml-2 mr-4'>
            <CiHome size={iconSizeMd}/>
          </Link>
          <Link to="/projects" onClick={()=> setIsOpen(false)} className='mr-4'>
            <CiDesktop size={iconSizeMd}/>
          </Link>
          <Link to="/about" onClick={()=> setIsOpen(false)} className='mr-4'>
            <CiUser size={iconSizeMd}/>
          </Link>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/picturing-mexican-america" element={<PMA />} />
        <Route path="/bruinwalk" element={<Bruinwalk />} />
        <Route path="/mobile-development" element={<Mobile />} />
        <Route path="/spring-sing" element={<SpringSing />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
