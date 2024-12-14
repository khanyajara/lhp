import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Navbar';
// import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    emailjs
      .sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
      .then(
        (result) => {
          console.log('Message sent: ', result.text);
          alert('Message Sent!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log('Error: ', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="ContactPage">
      <Navbar/>
      <header className="ContactPage-header">
        <h1>Contact Us</h1>
      </header>
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>Have a question or need more information? We’d love to hear from you. Use the form below to send us a message!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
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
