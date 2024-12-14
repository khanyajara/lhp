import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../Styles/HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
     <Navbar/>

      <section className="intro">
        <div className="intro-text">
          <h2>Our Mission and Vision</h2>
          <p>
            At LHP Detergents Cleaning Services, our mission is to provide eco-friendly cleaning and landscaping solutions tailored to the unique needs of our clients. We aim to deliver top-notch, sustainable cleaning services that enhance the environment and improve the quality of life in the spaces we serve.
          </p>
          <p>
            Led by <strong>Thapelo Motsage</strong>, we strive to set new standards in the cleaning industry through innovation, professionalism, and a commitment to excellence. With years of experience and a dedicated team, we are transforming spaces, one clean at a time.
          </p>
        </div>
        <div className="intro-image">
          <img src="/lhp-7.jpg" alt="LHP Detergents" />
        </div>
      </section>

      

      {/* <section id="about" className="section">
        <h2>About Us</h2>
        <p>LHP Detergents Cleaning Services Limited is a leading provider of eco-friendly cleaning products and services.</p>
      </section>

      
      <section id="services" className="section">
        <h2>Our Services</h2>
        <ul>
          <li>Office Cleaning</li>
          <li>Education Sector Maintenance</li>
          <li>Hospitality and Leisure Solutions</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Get in touch with us for more information about our services.</p>
      </section> */}

      <footer className="HomePage-footer">
        &copy; 2024 LHP Detergents Cleaning Services. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
