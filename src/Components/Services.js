import React from 'react';
import Navbar from './Navbar';
 import '../Styles/ServicesPage.css';

function ServicesPage() {
  return (
    <div className="ServicesPage">
        <Navbar/>
      <header className="ServicesPage-header">
        <h1>Our Services</h1>
      </header>
      <section className="services-list">
        <h2>Cleaning Services We Offer</h2>
        <ul>
          <li>Office Cleaning</li>
          <li>Education Sector Maintenance</li>
          <li>Hospitality and Leisure Solutions</li>
          <li>Retail and Commercial Cleaning</li>
          <li>Industrial and Manufacturing Cleaning</li>
          <li>Landscaping and Hygiene Services</li>
        </ul>
      </section>
    </div>
  );
}

export default ServicesPage;
