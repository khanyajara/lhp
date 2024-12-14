import React from 'react';
import Navbar from './Navbar';
// import Slider from './slider';  
 import '../Styles/Projects.css';

function ProjectsPage() {
  return (
    <div className="ProjectsPage">
        <Navbar/>
      <header className="ProjectsPage-header">
        <h1>Our Projects</h1>
      </header>

      
      {/* <Slider /> */}

      <section className="projects-list">
        <h2>Featured Projects</h2>
        <ul>
          <li>NEF (National Empowerment Funds) Cleaning Services - Three-year contract</li>
          <li>COGHSTA - Cleaning Services - Three-year contract</li>
          <li>Office of the Public Commission - Cleaning Services (Two years + 1 extension)</li>
          <li>Care-line Clinic Hospital - Cleaning Services</li>
          <li>NIHE (Phatshimang College) - Cleaning and Gardening Services</li>
          <li>Galeshewe Funerals - Aftercare cleaning service</li>
          <li>Department of Transport - Carpet cleaning, water extraction for SAPS, Regional Court</li>
          <li>Galeshewe PnP - Cleaning and fumigation services</li>
          <li>Department Social Development - COVID-19 Sanitizing and Fumigation</li>
          <li>National Defense Force - COVID-19 Sanitizing and Fumigation</li>
          <li>Drogfontein - COVID-19 Sanitizing and Fumigation</li>
        </ul>
      </section>
    </div>
  );
}

export default ProjectsPage;
