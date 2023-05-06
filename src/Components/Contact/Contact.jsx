import React, { useState } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import "./Contact.css";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Segment className="contact-page" vertical>
      <Container text>
        <Header as="h1">Contact Us</Header>
        {isSubmitted ? (
          <h2>Thank you for contacting us! We will get back to you soon.</h2>
        ) : (
          <>
            <h3>Have a question or comment? Contact us using the form below:</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </>
        )}
      </Container>
    </Segment>
  );
}

export default Contact;
