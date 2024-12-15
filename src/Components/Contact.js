import React from 'react';
import Navbar from './Navbar';
 import '../Styles/ContactPage.css';

function ContactPage() {
  return (
    <div className="ContactPage">
      <Navbar />
      <header className="ContactPage-header">
        <h1>Contact Us</h1>
      </header>
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>Have a question or need more information? We’d love to hear from you. Use the form below to send us a message!</p>
        <form
          action="https://formspree.io/f/xyzyqgza"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <section className="contact-details">
        <h2>Contact Details</h2>
        <p>We are available at the following contact points:</p>
        <ul>
          <li>Phone: +27 74 4474 313</li>
          <li>Email: <a href="mailto:lhpdetergents@gmail.com">lhpdetergents@gmail.com</a></li>
          <li>Location: Cnr Tyala and Hulana Street, Galeshewe, Kimberley, Northern Cape, South Africa</li>
        </ul>
      </section>
    </div>
  );
}

export default ContactPage;
