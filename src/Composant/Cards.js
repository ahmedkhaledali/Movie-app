import React from "react";
import "react-bootstrap";
import "../App.css";
import { Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Card from "react-bootstrap/Card";

function Cards({ input, getAdd, getfavorie, movies }) {
  // const [Movies, setMovies] = useState([]);
  // const getMovies = () => {
  //   fetch("Movies.json")
  //     .then((recp) => recp.json())
  //     .then((Movies) => setMovies(Movies));
  // };
  // useEffect(() => {
  //   getMovies();
  // }, []);

  return input === "" ? (
    <div>
      <Container className="fond">
        <Row className="justify-content-around p-4 ">
          {Object.keys(movies).map((id) => (
            <Col md={3} className="justify-self-center">
              <Card className="cards">
                <Image src={movies[id].poster} style={{ height: "200px" }} />
                <p className="ttcard">{movies[id].title}</p>
                <button
                  className="btcl"
                  onClick={() => {
                    getAdd();
                    getfavorie(movies[id]);
                  }}
                >
                  <img src="https://img.icons8.com/pastel-glyph/35/000000/like--v2.png" />
                </button>
                <br />
                <Rater total={5} rating={movies[id].rate} />
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
        {Object.keys(movies)
          .filter((id) =>
            movies[id].title.toLowerCase().includes(input.toLowerCase())
          )
          .map((id) => (
            <Col md={3} className="justify-self-center">
              <Card className="cards">
                <Image src={movies[id].poster} style={{ height: "200px" }} />
                <p style={{ textAlign: "center" }}>{movies[id].title}</p>
                <button
                  className="btcl"
                  onClick={() => {
                    getAdd();
                    getfavorie(id);
                  }}
                >
                  <img src="https://img.icons8.com/pastel-glyph/35/000000/like--v2.png" />
                </button>
                <br />
                <Rater total={5} rating={movies[id].rate} />
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default Cards;
