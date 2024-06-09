import React, { Component } from 'react';
import './ContactUs.css';

class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us">
        <h1>System Color Picker</h1>
        <h2>Feedback & Support</h2>
        <p>
          If you have a GitHub account, <a href="https://github.com" target="_blank" rel="noopener noreferrer">open an issue on the repo</a> instead.
        </p>
        <form>
          <label>
            Message*
            <textarea name="message" placeholder="I'm a human. Please be nice." />
          </label>
          <label>
            Email*
            <input type="email" name="email" placeholder="Your email" />
          </label>
          <small>Only used for replying to you.</small>
          <label>
            Attachments
            <input type="file" name="attachments" multiple />
          </label>
          <button type="submit">Send Feedback</button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
