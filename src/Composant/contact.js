import React from "react";
import Navbare from "./Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Container } from "react-bootstrap";
import Video from "./video";

function Contact({ Addfavorie }) {
  return (
    <div>
      <Navbare Addfavorie={Addfavorie} />
      <Container>
        <Row className="d-flex justify-content-center p-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>

      <Video />
    </div>
  );
}

export default Contact;
