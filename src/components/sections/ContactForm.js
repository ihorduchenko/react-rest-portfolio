import React, { Component } from "react";
import { MDBBtn, MDBInput } from 'mdbreact';

class ContactForm extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <form className="mt-5">
        <div className="grey-text">
          <MDBInput
            name="your_name"
            label="Your name"
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            name="your_email"
            label="Your email"
            type="email"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            name="where_found"
            label="Where did you find me?"
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            name="message"
            type="textarea"
            rows="2"
            label="Your message"
          />
        </div>
        <div className="text-center">
          <MDBBtn type="submit" color="primary">
            Send
          </MDBBtn>
        </div>
      </form>
    );
  }
};

export default ContactForm;