import React from "react";
import "./contact.scss";

function Contact(props) {
  return (
    <div className="contact-container">
      <form>
        <div className="form-top">
          <div className="top-input">
            <input type="text" placeholder="Your name" name="name" />
            <input type="text" placeholder="Your email" name="email" />
          </div>
          <div className="contact-links">
            <div>
              LinkedIn<i class="fab fa-linkedin"></i>
            </div>
            <div>
              GitHub<i class="fab fa-github-square"></i>
            </div>
          </div>
        </div>

        <textarea
          className="message"
          type="text"
          placeholder="Message..."
          name="message"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
