import React, { Component } from 'react';
import './ContactUs.css';
import Header from '../components/Header';

class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      email: '',
      successMessage: '',
      errorMessage: ''
    };
  }

  onTextInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      successMessage: '',
      errorMessage: ''
    });
  };

  onSubmitClick = (event) => {
    event.preventDefault();

    if (!this.state.message || !this.state.email) {
      this.setState({ errorMessage: 'Please fill all the fields', successMessage: '' });
      return;
    }

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
        this.setState({ successMessage: 'Email sent successfully!', errorMessage: '' });
      })
      .catch(error => {
        this.setState({ errorMessage: 'Failed to send email. Please try again.', successMessage: '' });
      });

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
          <label>Please fell a form below or send an email to </label><a href="mailto:support.moniac@icloud.com">support.moniac@icloud.com</a>
          <div style={{"height": "20px"}}/>
          <form>
            <label>
              Message*
              <textarea
                name="message"
                placeholder="Describe your issue or feedback here"
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
            <button type="submit" onClick={this.onSubmitClick}>Send Request</button>
          </form>
          {this.state.successMessage && <div className="success-message">{this.state.successMessage}</div>}
          {this.state.errorMessage && <div className="error-message">{this.state.errorMessage}</div>}
        </div>
      </>
    );
  }
}

export default ContactUs;
