import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { MDBBtn, MDBInput } from "mdbreact";

import { isEmpty } from '../../helpers';

class ContactForm extends Component {
  state = {
    your_name: '',
    your_email: '',
    where_found: '',
    message: ''
  };

  handleSubmit(e) {
    e.preventDefault();
    const { your_name, your_email, where_found, message } = this.state;

    let templateParams = {
      "your_name": your_name,
      "your_email": your_email,
      "where_found": where_found,
      "message": message
    };

    let service_id = "default_service";
    let template_id = "template_9g3yiL3l";
    if(!isEmpty(your_name) && !isEmpty(your_email) && !isEmpty(message)) {
      emailjs.send(service_id, template_id, templateParams, 'user_QPtlGIKYiW75zbGhJq94s');
      this.resetForm();
    } else {
      alert('Please, fill in required fields!');
    }
  }

  resetForm() {
    this.setState({
      your_name: '',
      your_email: '',
      where_found: '',
      message: ''
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  componentDidMount() {}

  render() {
    return (
      <form className="mt-5" onSubmit={this.handleSubmit.bind(this)}>
        <div className="grey-text">
          <MDBInput
            name="your_name"
            value={this.state.your_name}
            onChange={this.handleChange.bind(this, 'your_name')}
            label="Your name *"
            type="text"
            validate
          />
          <MDBInput
            name="your_email"
            value={this.state.your_email}
            onChange={this.handleChange.bind(this, 'your_email')}
            label="Your email *"
            type="email"
            validate
          />
          <MDBInput
            name="where_found"
            value={this.state.where_found}
            onChange={this.handleChange.bind(this, 'where_found')}
            label="Where did you find me?"
            type="text"
          />
          <MDBInput
            name="message"
            value={this.state.message}
            onChange={this.handleChange.bind(this, 'message')}
            type="textarea"
            rows="2"
            label="Your message *"
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
}

export default ContactForm;
