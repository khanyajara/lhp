import React, { useState } from 'react';
import Navbar from './Navbar';
import '../Styles/AboutPage.css';

function AboutPage() {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.id;
      }
    });
    setActiveSection(currentSection);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="AboutPage">
      <Navbar />
      <header className="AboutPage-header">
        <h1>Welcome to LHP Detergents Cleaning Services Limited</h1>
        <p>
          We have built an enviable reputation for Quality and Efficient Cleaning Products, Cleaning, and Landscaping Solutions in the region.
        </p>
      </header>

      <section id="table-of-contents">
        <h2>Table of Contents</h2>
        <ul>
          <li>
            <a
              href="#who-we-are"
              className={activeSection === 'who-we-are' ? 'active' : ''}
            >
              Who We Are
            </a>
          </li>
          <li>
            <a
              href="#why-work-with-us"
              className={activeSection === 'why-work-with-us' ? 'active' : ''}
            >
              Why Work With Us
            </a>
          </li>
          <li>
            <a
              href="#industry-focus"
              className={activeSection === 'industry-focus' ? 'active' : ''}
            >
              Industry Focus
            </a>
          </li>
          <li>
            <a
              href="#capabilities"
              className={activeSection === 'capabilities' ? 'active' : ''}
            >
              Our Capabilities
            </a>
          </li>
          <li>
            <a
              href="#our-people"
              className={activeSection === 'our-people' ? 'active' : ''}
            >
              Our People
            </a>
          </li>
          <li>
            <a
              href="#case-studies"
              className={activeSection === 'case-studies' ? 'active' : ''}
            >
              Case Studies
            </a>
          </li>
          <li>
            <a
              href="#value-proposition"
              className={activeSection === 'value-proposition' ? 'active' : ''}
            >
              Value Proposition
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Get In Touch
            </a>
          </li>
        </ul>
      </section>

      <section id="who-we-are" className="section">
        <div className="section-text">
          <h2>Who We Are</h2>
          <p>LHP Detergents is a leading provider of cleaning products, services, and landscaping solutions. We offer affordable, tailor-made cleaning solutions to our clientele.</p>
        </div>
      </section>

      <section id="why-work-with-us" className="section">
        <div className="section-text">
          <h2>Why Work With Us</h2>
          <ul>
            <li>Customer Delight</li>
            <li>Quality Service</li>
            <li>Flexibility</li>
            <li>Health and Safety</li>
            <li>Eco-friendly Approach</li>
            <li>State of the Art Technology</li>
          </ul>
        </div>
      </section>

      <section id="industry-focus" className="section">
        <div className="section-text">
          <h2>Industry Focus</h2>
          <p>We have expertise in multiple sectors such as office spaces, education, hospitality, retail, and industrial cleaning services.</p>
          <ul>
            <li>Office Spaces</li>
            <li>Education Sector</li>
            <li>Hospitality & Leisure Sector</li>
            <li>Retail Sector</li>
            <li>Financial Sector</li>
            <li>Industrial, Manufacturing & Distribution</li>
          </ul>
        </div>
      </section>

      <section id="capabilities" className="section">
        <div className="section-text">
          <h2>Our Capabilities</h2>
          <p>We specialize in high-quality cleaning and landscaping, utilizing state-of-the-art technology and eco-friendly products.</p>
        </div>
      </section>

      <section id="our-people" className="section">
        <h2>Our People</h2>
        <p>Our staff are specially trained in various cleaning disciplines and work with the highest standards of health and safety.</p>
      </section>

      <section id="case-studies" className="section">
        <h2>Case Studies</h2>
        <p>We have successfully partnered with organizations like NEF, COGHSTA, and the National Defense Force, delivering customized cleaning solutions.</p>
      </section>

      <section id="value-proposition" className="section">
        <h2>Value Proposition</h2>
        <p>At LHP Detergents, we always put our customers first, delivering top-quality cleaning services through dedication, trust, and professionalism.</p>
      </section>

      <section id="contact" className="section">
        <h2>Get In Touch</h2>
        <p>Talk to us or visit us:</p>
        <p><strong>Location:</strong> The Northern Cape, South Africa</p>
        <p><strong>Phone:</strong> +27 74 4474 313</p>
        <p><strong>Email:</strong> lhpdetergents@gmail.com</p>
      </section>

      <footer className="AboutPage-footer">
        &copy; 2024 LHP Detergents Cleaning Services. All rights reserved.
      </footer>
    </div>
  );
}

export default AboutPage;