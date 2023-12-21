import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact
