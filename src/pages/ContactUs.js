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

    const body = {
      "Messages":[
          {
              "From": {
                  "Email": "moneytracker.development@gmail.com",
                  "Name": "Me"
              },
              "To": [
                  {
                      "Email": "support.moniac@icloud.com",
                      "Name": "You"
                  }
              ],
              "Subject": "My first Mailjet Email!",
              "TextPart": "Greetings from Mailjet!",
              "HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
          }
      ]
  }

    fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic MTNhYWQxMDVmYWJkZWU3ODM3ZGQ1NDZhYjcyZWUyNTY6NDcyMjM5M2M0MzBlNjAyNDAwZWQyYjhhY2JjODI4NWY=',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(response => {
        this.setState({email: response});
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
