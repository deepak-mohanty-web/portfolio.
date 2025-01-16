import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in Touch</span>

      <div className="contact__container container">
        <form action="#" className="contact__form">
          <div className="contact__form-group">
            <label htmlFor="name" className="contact__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="contact__input"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="email" className="contact__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="contact__input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea
              id="message"
              className="contact__textarea"
              placeholder="Write your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact__button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
