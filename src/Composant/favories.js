import React from "react";
import Navbare from "./Navbar";
import "react-bootstrap";
import "../App.css";
import Image from "react-bootstrap/Image";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
function Favories({ favorie, Addfavorie, input, handelchange, refreshPage }) {
  return (
    <div>
      <Navbare
        Addfavorie={Addfavorie}
        input={input}
        handelchange={handelchange}
      />

      <h1 className="date">Mes favories film </h1>
      <Container className="fond ">
        <Row className="d-flex justify-content-around p-4">
          {console.log(favorie)}

          {Object.keys(favorie)
            .filter((id) =>
              favorie[id].title.toLowerCase().includes(input.toLowerCase())
            )
            .map((id) => (
              <Col md={3} className="justify-self-center">
                <Card className="cards">
                  <Image src={favorie[id].poster} style={{ height: "200px" }} />
                  <p style={{ textAlign: "center" }}>{favorie[id].title}</p>
                  <button className="btcl">
                    <img src="https://img.icons8.com/pastel-glyph/35/000000/like--v2.png" />
                  </button>
                  <br />
                  <Rater total={5} rating={favorie[id].rate} />
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default Favories;
