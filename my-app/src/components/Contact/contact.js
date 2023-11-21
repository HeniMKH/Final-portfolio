import React, { useState } from "react";
import "./contact.css";

function Contact() {
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactpageTitle">Contact Me</h1>
        <p className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contactform"
        >
          <input
            type="hidden"
            name="access_key"
            value="2ec75e68-fdec-42fc-934a-bec3fd102c69"
          />
          <input
            type="name"
            className="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          ></input>
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
