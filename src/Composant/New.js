import React from "react";
import "react-bootstrap";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import Joker2 from "./images/joker2.jpg";
import Us from "./images/us.jpg";
import Wj from "./images/Wj.jpg";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Rater from "react-rater";

function New() {
  return (
    <div>
      {/* <Row className="d-flex justify-content-around p-4">
        <Col md={3}>
          <Image src={Disney} style={{ width: "350px", height: "200px" }} />
        </Col>
        <Col md={3}>
          <Image src={Marvel} style={{ width: "350px", height: "200px" }} />
        </Col>
        <Col md={3}>
          <Image src={Pixar} style={{ width: "350px", height: "200px" }} />
        </Col>
      </Row> */}

      <Carousel fade>
        <Carousel.Item>
          <img className="slider" src={Us} alt="First slide" />
          <Carousel.Caption>
            <p className="descrp">The montagne between us</p>
            <button type="button" class="btn btn-outline-warning w-25 m-l-100">
              Bande annonce{" "}
              <img src="https://img.icons8.com/flat-round/40/fa314a/play--v1.png" />
            </button>
            <img src="https://img.icons8.com/android/30/fa314a/clock.png" />
            01:51:50
            <br />
            <Rater total={5} rating={4} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider" src={Wj} alt="Second slide" />
          <Carousel.Caption>
            <p className="descrp">Wrath of Man</p>
            <button type="button" class="btn btn-outline-warning w-25 m-l-100">
              Bande annonce{" "}
              <img src="https://img.icons8.com/flat-round/40/fa314a/play--v1.png" />
            </button>
            <img src="https://img.icons8.com/android/30/fa314a/clock.png" />
            01:58:57
            <br />
            <Rater total={5} rating={5} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider" src={Joker2} alt="Third slide" />
          <Carousel.Caption>
            <p className="descrp">Joker</p>
            <button type="button" class="btn btn-outline-warning w-25 m-l-100">
              Bande annonce{" "}
              <img src="https://img.icons8.com/flat-round/40/fa314a/play--v1.png" />
            </button>
            <img src="https://img.icons8.com/android/30/fa314a/clock.png" />
            02:01:50
            <br />
            <Rater total={5} rating={4} />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default New;
