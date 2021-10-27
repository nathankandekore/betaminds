import React from "react";

const ContactForm = () => {
  return (
    <div className="contactForm">
      <h1>Want to find out more?</h1>
      <form className="contact">
        <div className="firstNameContainer">
          <input
            type="text"
            className="fname"
            placeholder="What's your name?"
          />
        </div>
        <br />
        <div className="textBoxContainer">
          <label className="subject" />
          <textarea
            className="contactTextBox"
            placeholder="How can we help?"
          ></textarea>
        </div>
        <br />

        <button className="contactBtn" type="button" value="Submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
