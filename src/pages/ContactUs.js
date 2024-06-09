import React, { Component } from 'react';
import './ContactUs.css';
import Header from '../components/Header';

class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      email: ''
    };
  }

  onTextInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmitClick = (event) => {
    event.preventDefault();

    console.warn('Sending email:', this.state);

    const body = {
      "contactEmail": this.state.email,
      "message": this.state.message
    }

    fetch('https://us-central1-cryptic-smile-425910-d6.cloudfunctions.net/send_support_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => console.error(error));

    this.setState({
      message: '',
      email: ''
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="contact-us">
          <h1>Feedback & Support</h1>
          <form>
            <label>
              Message*
              <textarea
                name="message"
                placeholder="I'm a human. Please be nice."
                value={this.state.message}
                onChange={this.onTextInputChange}
              />
            </label>
            <label>
              Email*
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={this.state.email}
                onChange={this.onTextInputChange}
              />
            </label>
            <small>Only used for replying to you.</small>
            <button type="submit" onClick={this.onSubmitClick}>Send Feedback</button>
          </form>
        </div>
      </>
    );
  }
}

export default ContactUs;
