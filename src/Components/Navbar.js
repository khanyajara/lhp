import React from "react";
import { Link } from 'react-router-dom';

function Navbar () {
    return(
        <header className="HomePage-header">
        <div > <img className='logo' src="/logo-removebg-preview.png" alt="LHP Detergents" /></div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
    )
}
export default Navbar