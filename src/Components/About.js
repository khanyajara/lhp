import React, { useState } from 'react';
import Navbar from './Navbar';
import '../Styles/AboutPage.css';
import Footer from './Footer';

function AboutPage() {
  

  return (
    <div className="AboutPage">
      <Navbar />
      <div className="parent">
  <div className="card div1">
    <h1 className="card-title">Welcome to LHP Detergents Cleaning Services Limited</h1>
    <p className="card-text1-0">
      Welcome to LHP Detergents, your trusted partner for a cleaner, greener, and healthier living space.
      We specialize in the manufacturing of high-quality cleaning detergents, expert cleaning services,
      and gardening solutions. We aim to exceed your expectations while promoting sustainability and
      community well-being.
    </p>
  </div>

  <div className="card div2" id="who-we-are">
    <h2 className="card-title">Who We Are</h2>
    <p className="card-text1">
      LHP Detergents is a leading provider of cleaning products, services, and landscaping solutions.
      We offer affordable, tailor-made cleaning solutions to our clientele.
    </p>
  </div>

  <div className="card div3" id="why-work-with-us">
    <h2 className="card-title">Why Work With Us</h2>
    <ul className="card-text1">
      <li>Customer Delight</li>
      <li>Quality Service</li>
      <li>Flexibility</li>
      <li>Health and Safety</li>
      <li>Eco-friendly Approach</li>
      <li>State of the Art Technology</li>
    </ul>
  </div>

  <div className="card div4" id="industry-focus">
    <h2 className="card-title">Industry Focus</h2>
    <ul className="card-text1">
      <li>Office Spaces</li>
      <li>Education Sector</li>
      <li>Hospitality & Leisure Sector</li>
      <li>Retail Sector</li>
      <li>Financial Sector</li>
      <li>Industrial, Manufacturing & Distribution</li>
    </ul>
  </div>

  <div className="card div5" id="capabilities">
    <h2 className="card-title">Our Capabilities</h2>
    <p className="card-text1">
      We specialize in high-quality cleaning and landscaping, using state-of-the-art tech and
      eco-friendly products.
    </p>
  </div>

  <div className="card div6" id="our-people">
    <h2 className="card-title">Our People</h2>
    <p className="card-text1">
      Our staff are specially trained in various cleaning disciplines and work with the highest
      standards of health and safety.
    </p>
  </div>

  <div className="card div7" id="case-studies">
    <h2 className="card-title">Case Studies</h2>
    <p className="card-text1">
      We’ve successfully partnered with NEF, COGHSTA, and the National Defense Force, delivering
      customized cleaning solutions.
    </p>
  </div>

  <div className="card div8" id="value-proposition">
    <h2 className="card-title">Value Proposition</h2>
    <p className="card-text1">
      At LHP Detergents, we always put our customers first, delivering top-quality cleaning
      services through dedication, trust, and professionalism.
    </p>
  </div>
</div>

       <footer className="HomePage-footer">
         <Footer/>
        </footer>
    </div>
  );
}

export default AboutPage;
