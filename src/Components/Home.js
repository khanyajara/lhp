import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/HomePage.css";
import logo from "../logo.jpg";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="HomePage container py-4">

        <section className="intro row align-items-center mb-5">
          <div className="intro-text col-md-6">
            <h2>Our Mission and Vision</h2>
            <p>
              At LHP Detergents Cleaning Services, our mission is to provide eco-friendly cleaning and landscaping solutions tailored to the unique needs of our clients. We aim to deliver top-notch, sustainable cleaning services that enhance the environment and improve the quality of life in the spaces we serve.
            </p>
            <p>
              Led by <strong>Thapelo Motsage</strong>, we strive to set new standards in the cleaning industry through innovation, professionalism, and a commitment to excellence. With years of experience and a dedicated team, we are transforming spaces, one clean at a time.
            </p>
          </div>
          <div className="intro-image col-md-6 text-center">
            <img src={logo} alt="LHP Detergents" className="img-fluid rounded" />
          </div>
        </section>

        <section className="who-we-are mb-5">
          <h2>Who We Are</h2>
          <p>
            LHP Detergents is a leading provider of cleaning products, services, and landscaping solutions.
            We offer affordable, tailor-made cleaning solutions to our clientele.
          </p>
        </section>

        <section id="services" className="services-section mb-5">
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

        <section className="why-work-with-us mb-5">
          <h2>Why Work With Us</h2>
          <ul>
            <li>Customer Delight</li>
            <li>Quality Service</li>
            <li>Eco-friendly Approach</li>
          </ul>
        </section>

        <section className="value-proposition mb-5">
          <h2>Our Value Proposition</h2>
          <p>
            At LHP Detergents, we always put our customers first, delivering top-quality cleaning
            services through dedication, trust, and professionalism.
          </p>
        </section>

      </div>

      <footer className="HomePage-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
