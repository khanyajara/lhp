import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/HomePage.css";

function HomePage() {
  return (
    <div >
      <Navbar />
<div className="HomePage">
  
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
  
        
        <section id="services" className="services-section container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                
                <div className="card-body">
                  <h5 className="card-title">Office Cleaning</h5>
                  <p className="card-text">
                    Keep your workspace spotless with our professional office cleaning services, tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                
                <div className="card-body">
                  <h5 className="card-title">Education Sector Maintenance</h5>
                  <p className="card-text">
                    Enhance learning environments with our specialized cleaning and maintenance services for schools.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                
                <div className="card-body">
                  <h5 className="card-title">Hospitality and Leisure Solutions</h5>
                  <p className="card-text">
                    Deliver a welcoming experience with our comprehensive hospitality cleaning solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  </div>
        <footer className="HomePage-footer">
          &copy; 2024 LHP Detergents Cleaning Services. All rights reserved.
        </footer>

    </div>
  );
}

export default HomePage;
