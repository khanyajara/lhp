import React, { useState } from 'react';
import Navbar from './Navbar';
import '../Styles/AboutPage.css';

function AboutPage() {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredLink, setHoveredLink] = useState('');

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

  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHover = (id) => {
    setHoveredLink(id);
    setTimeout(() => {
      setHoveredLink('');
    }, 5000);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="AboutPage">
      <Navbar />
      <div className="container1 my-5">
        
        <div className="card mb-4" style={{ backgroundColor: 'transparent', color: '#fff' }}>
          <div className="card-body text-center">
            <h1 className="card-title">Welcome to LHP Detergents Cleaning Services Limited</h1>
            <p className="card-text1">
            Welcome to LHP Detergents, your trusted partner for a cleaner,
            greener, and healthier living space. We specialize in the manufacturing
            of high-quality cleaning detergents, offering expert cleaning services,
            and providing reliable gardening services supply and delivery. At LHP 
            Detergents, we are committed to delivering exceptional products and 
            services that exceed our customers' expectations. Our mission is to
            make a positive impact on our community by promoting cleanliness,
            sustainability, and environmental stewardship.
            Learn more about our products and services,
            and discover how we can help you achieve a cleaner,
            healthier, and happier living space
            </p>
          </div>
        </div>

        {/* Table of Contents Section in Card */}
        <div className="card mb-4" style={{ backgroundColor: 'transparent', color: '#fff' }}>
          <div className="card-body">
            <h2 className="card-title">Table of Contents</h2>
            <ul className="list-group">
              {[
                'who-we-are',
                'why-work-with-us',
                'industry-focus',
                'capabilities',
                'our-people',
                'case-studies',
                'value-proposition',
                'contact',
              ].map((id) => (
                <li
                  key={id}
                  className={`list-group-item ${
                    activeSection === id ? 'active bg-primary text-white' : ''
                  }`}
                  onClick={() => handleNavigation(id)}
                  onMouseEnter={() => handleHover(id)}
                  style={{
                    background: 'inherit',
                    color: activeSection === id ? '#fff' : '#000',
                  }}
                >
                  <a
                    href={`#${id}`}
                    className={`text-decoration-none ${
                      hoveredLink === id ? 'fw-bold text-light' : ''
                    }`}
                  >
                    {id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content Sections in Cards */}
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="card mb-4" id="who-we-are" style={{ backgroundColor: 'transparent', color: '#fff' }}>
              <div className="card-body">
                <h2 className="card-title">Who We Are</h2>
                <p className="card-text1">
                  LHP Detergents is a leading provider of cleaning products, services, and landscaping solutions. We offer
                  affordable, tailor-made cleaning solutions to our clientele.
                </p>
              </div>
            </div>

            <div className="card mb-4" id="why-work-with-us" style={{ backgroundColor: 'transparent', color: '#fff' }}>
              <div className="card-body">
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
            </div>

            <div className="card mb-4" id="industry-focus" style={{ backgroundColor: 'transparent', color: '#fff' }}>
              <div className="card-body">
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
            </div>

            <div className="card mb-4" id="capabilities" style={{ backgroundColor: 'transparent', color: '#fff' }}>
              <div className="card-body">
                <h2 className="card-title">Our Capabilities</h2>
                <p className="card-text1">
                  We specialize in high-quality cleaning and landscaping, utilizing state-of-the-art technology and
                  eco-friendly products.
                </p>
              </div>
            </div>
          </div>

          
          <div className="col-md-6">
            <div className="card mb-4" id="our-people" style={{ backgroundColor: 'transparent', color: '#fff' }}>
              <div className="card-body">
                <h2 className="card-title">Our People</h2>
                <p className="card-text1">
                  Our staff are specially trained in various cleaning disciplines and work with the highest standards of
                  health and safety.
                </p>
              </div>
            </div>

            <div className="card mb-4" id="case-studies" style={{ backgroundColor: 'transparent', color: '#fff' }}>
              <div className="card-body">
                <h2 className="card-title">Case Studies</h2>
                <p className="card-text1">
                  We have successfully partnered with organizations like NEF, COGHSTA, and the National Defense Force,
                  delivering customized cleaning solutions.
                </p>
              </div>
            </div>

            <div className="card mb-4" id="value-proposition" style={{ backgroundColor: 'transparent', color: '#fff' }}>
              <div className="card-body">
                <h2 className="card-title">Value Proposition</h2>
                <p className="card-text1">
                  At LHP Detergents, we always put our customers first, delivering top-quality cleaning services through
                  dedication, trust, and professionalism.
                </p>
              </div>
            </div>

            <div className="card mb-4" id="contact" style={{ backgroundColor: 'transparent', color: '#fff' }}>
              <div className="card-body">
                <h2 className="card-title">Get In Touch</h2>
                <p className="card-text1">
                  <strong>Location:</strong> The Northern Cape, South Africa
                </p>
                <p className="card-text1">
                  <strong>Phone:</strong> +27 74 4474 313
                </p>
                <p className="card-text1">
                  <strong>Email:</strong> lhpdetergents@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        

      </div>
      <footer className="HomePage-footer">
          &copy; 2024 LHP Detergents Cleaning Services. All rights reserved.
        </footer>
    </div>
  );
}

export default AboutPage;
