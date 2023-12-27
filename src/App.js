import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CiSquarePlus, CiSquareMinus, CiUser, CiHome, CiDesktop } from "react-icons/ci";

// Import page components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';

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
          <Link to="/" className='ml-2 mr-4'>
            <CiHome size={iconSizeMd}/>
          </Link>
          <Link to="/projects" className='mr-4'>
            <CiDesktop size={iconSizeMd}/>
          </Link>
          <Link to="/about" className='mr-4'>
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
      </Routes>
    </Router>
    </div>
  );
}

export default App;
