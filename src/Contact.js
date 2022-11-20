import React from "react";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="main-contact">
      <section className="contact">
        <header className="contact-header">
          <h3>Get In Touch</h3>
          <p>
            Wants to get in touch? I'd love to hear from you, Here's how you can
            reach me...
          </p>
        </header>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:khaledmohamed3360@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="https://m.me/khaledmohamed01"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+201011131316"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
