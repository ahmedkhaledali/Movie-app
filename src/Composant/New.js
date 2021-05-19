import React from "react";
import "react-bootstrap";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import Disney from "./images/disney.jpeg";
import Pixar from "./images/pixar.jpeg";
import Marvel from "./images/new3.jpg";
import Image from "react-bootstrap/Image";

function New() {
  return (
    <div>
      <Row className="d-flex justify-content-around p-4">
        <Col md={3}>
          <Image src={Disney} style={{ width: "350px", height: "200px" }} />
        </Col>
        <Col md={3}>
          <Image src={Marvel} style={{ width: "350px", height: "200px" }} />
        </Col>
        <Col md={3}>
          <Image src={Pixar} style={{ width: "350px", height: "200px" }} />
        </Col>
      </Row>
    </div>
  );
}
export default New;
