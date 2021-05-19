import React from "react";
import Navbare from "./Navbar";
import "react-bootstrap";
import "../App.css";
import Image from "react-bootstrap/Image";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
function Favories({ favorie, Addfavorie, input, handelchange }) {
  return (
    <div>
      <Navbare
        Addfavorie={Addfavorie}
        input={input}
        handelchange={handelchange}
      />
      <h1>Mes films </h1>

      <Row className="d-flex justify-content-around p-4">
        {favorie
          .filter((el) => el.title.toLowerCase().includes(input.toLowerCase()))
          .map((el) => (
            <Col md={3} className="justify-self-center">
              <Card className="cards">
                <Image src={el.poster} style={{ height: "200px" }} />
                <p style={{ textAlign: "center" }}>{el.title}</p>
                <button className="btcl">
                  <img src="https://img.icons8.com/pastel-glyph/35/000000/like--v2.png" />
                </button>
                <br />
                <Rater total={5} rating={el.rate} />
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default Favories;
