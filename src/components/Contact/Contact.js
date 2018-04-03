import React, { Component } from 'react';
import { Col, Form, FormGroup, HelpBlock, ControlLabel, FormControl, Button } from 'react-bootstrap';

import './Contact.css';

class Contact extends Component {

  render() {
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <Col componentClass={ControlLabel} sm={2}>
            {label}
          </Col>
          <Col sm={10}>
            <FormControl {...props} />
          </Col>
          <Col sm={12}>
            {help && <HelpBlock>{help}</HelpBlock>}
          </Col>
        </FormGroup>
      );
    }
    
    return (
      <div id="contact-form">
        <Form method="POST" action="https://formspree.io/ahousejobs@gmail.com">
          <FieldGroup
            id="email"
            type="email"
            name="_replyto"
            label="Email Address"
            placeholder="example@abc.com"
          />
          <FieldGroup
            id="name"
            type="text"
            name="name"
            label="Name"
            placeholder="Your Name"
          />
          <FieldGroup
           id="subject"
           type="text"
           name="_subject"
           label="Subject"
           placeholder="Company: Job Opportunity"
           />
           
           <input type="hidden" name="_next" value='/thanks.html' />
           
          <FormGroup controlId="message">
            <Col componentClass={ControlLabel} sm={2}>
              <ControlLabel>Message</ControlLabel>
            </Col>
            <Col sm={10}>
              <FormControl componentClass="textarea" name="message" placeholder="Type here..." />
            </Col>
            <Col sm={12}>
              <Button type="submit">Send</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Contact;