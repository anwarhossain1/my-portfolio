
import React, { useState } from "react";
import classes from './contactform.module.css';
import { Button } from 'react-bootstrap';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className={classes.form__container}>
      
        <div className={classes.form}>
          <div className={classes.formtext}>
          <h1>Get In Touch</h1>
        <h2>Do you have an interesting project I can help with? Feel free to reach out to me by using one of the following:
          <ul>
            <li>Email: <a href='mailto:irishkhan33@gmail.com' >irishkhan33@gmail.com</a></li>
            <li>LinkedIn: <a href='https://www.linkedin.com/in/anwarhossain1' target='_blank'>Anwar Hossain</a></li>
            <li>GitHub: <a href='https://github.com/anwarhossain1' target='_blank'>anwarhossain1</a></li>
          </ul>
          Or use the contact form on this page to reach me instantly.
          </h2>
          </div>

        






          <form onSubmit={handleSubmit}>
            <div className={classes.row}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
            </div>
          <div className={classes.row}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
          </div>
          <div className={classes.row}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" required />
          </div>
              <button type="submit" variant="secondary" size="lg" active>{status}</button>
            </form>

        </div>
        

    </div>
  );
};

export default ContactForm;