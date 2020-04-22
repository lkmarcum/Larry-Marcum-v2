import React, { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

function Contact(props) {
  const [email, setEmail] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  function sendEmail(e) {
    e.preventDefault();
    // console.log(`Email: ${email.message}`);
    // console.log(`Service ID: ${process.env.REACT_APP_SERVICE_ID}`);
    // console.log(`Template ID: ${process.env.REACT_APP_TEMPLATE_ID}`);
    // console.log(`User ID: ${process.env.REACT_APP_USER_ID}`);

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        email,
        process.env.REACT_APP_USER_ID
      )
      .then((res) => {
        console.log("SUCCESS!", res.status, res.test);
      })
      .catch((err) => {
        console.log("FAILED ", err);
      });

    setEmail({ name: "", email: "", message: "" });
  }

  function openLink() {
    window.open("https://www.linkedin.com/in/lkmarcum/");
  }

  function openGH() {
    window.open("https://github.com/lkmarcum");
  }

  return (
    <div className="contact-container">
      <form onSubmit={sendEmail}>
        <div className="form-top">
          <div className="top-input">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={email.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Your email"
              name="email"
              value={email.email}
              onChange={handleChange}
            />
          </div>
          <div className="contact-links">
            <div>
              LinkedIn<i class="fab fa-linkedin" onClick={openLink}></i>
            </div>
            <div>
              GitHub<i class="fab fa-github-square" onClick={openGH}></i>
            </div>
          </div>
        </div>

        <textarea
          className="message"
          type="text"
          placeholder="Message..."
          name="message"
          value={email.message}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
