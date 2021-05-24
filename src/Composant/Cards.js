import React from "react";
import "react-bootstrap";
import "../App.css";
import { Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Card from "react-bootstrap/Card";

function Cards({ input, getAdd, getfavorie }) {
  const [Movies, setMovies] = useState([]);
  const getMovies = () => {
    fetch("Movies.json")
      .then((recp) => recp.json())
      .then((Movies) => setMovies(Movies));
  };
  useEffect(() => {
    getMovies();
  }, []);

  return input === "" ? (
    <div>
      <Rater total={5} />

      <Container>
        <Row className="justify-content-around p-4 ">
          {Movies.map((el) => (
            <Col md={3} className="justify-self-center">
              <Card className="cards">
                <Image src={el.poster} style={{ height: "200px" }} />
                <p style={{ textAlign: "center" }}>{el.title}</p>
                <button
                  className="btcl"
                  onClick={() => {
                    getAdd();
                    getfavorie(el);
                  }}
                >
                  <img src="https://img.icons8.com/pastel-glyph/35/000000/like--v2.png" />
                </button>
                <br />
                <Rater total={5} rating={el.rate} />
              </Card>
            </Col>
          ))}
          <br />
        </Row>
      </Container>
    </div>
  ) : (
    <div>
      <Row className="justify-content-around p-4 ">
        {Movies.filter((el) =>
          el.title.toLowerCase().includes(input.toLowerCase())
        ).map((el) => (
          <Col md={3} className="justify-self-center">
            <Card className="cards">
              <Image src={el.poster} style={{ height: "200px" }} />
              <p style={{ textAlign: "center" }}>{el.title}</p>
              <button
                className="btcl"
                onClick={() => {
                  getAdd();
                  getfavorie(el);
                }}
              >
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

export default Cards;
