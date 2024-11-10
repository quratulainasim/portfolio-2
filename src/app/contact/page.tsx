import React from "react";
import "../../styles/contact.css";
import Link from "next/link";

function Contact() {
  return (
  
    <section className="container">
    <div className="contact-inner">
      <div className="contact-text">
        <h1>Contact Us</h1>
        <p>
        I am always excited to connect with new people and explore
        potential collaborations.Whether you have a project in mind a
        question or simply want to chat feel free to reach out.I had love
        to hear from you and discuss how we can create something amazing
        together. Get in touch through the form below and I will get back
        to you as soon as possible.
        </p>
      </div>
      <div className="form-content">
        <div className="form-input">
          <div className="input1">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input1">
            <label htmlFor="name">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-textarea">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>

          <div className="form-btn">
            <Link href="/">
              <button className="btn">Submit</button>
            </Link>
            <Link href="/"></Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}

export default Contact;