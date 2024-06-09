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

    const templateParams = {
      message: this.state.message,
      email: this.state.email
    };

    const data = { example: 'data' };

    fetch('https://api.mail.gw/domains', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      // body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(response => {
        this.setState({email: response[0].domain})
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