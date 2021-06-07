import React from "react";
import "react-bootstrap";
import "../App.css";
import { Row, Col, Container, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Modif from "./modif";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Ali from "../Composant/images/ali.png";
import FormControl from "react-bootstrap/FormControl";

function Admin({ movies, input }) {
  const [ajout, setAjout] = useState({
    title: "",
    rate: "",
    poster: "",
    overview: "",
    release: "",
    genre: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://app2-861f5-default-rtdb.firebaseio.com/posts.json", ajout)
      .then((res) => console.log(res));
  };

  //   const supprimer = (id) => {
  //     axios.delete(`http://localhost:3005/posts${id}`).then((res2) => {
  //       console.log(res2);
  //     });
  //   };

  const supprimer = (id) => {
    axios
      .delete(`https://app2-861f5-default-rtdb.firebaseio.com/posts/${id}.json`)
      .then((res2) => console.log(res2.data))
      .then((res2) => refreshPage());
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* <FormControl
        type="text"
        placeholder="Search"
        className="search"
        // onChange={handelchange}
      /> */}
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        className="navtabs"
      >
        <Row>
          <Col sm={3} className="cole">
            <img
              className="admin"
              src="https://img.icons8.com/ios-filled/70/000000/admin-settings-male.png"
            />

            <Nav variant="pills" className="flex-column p-2">
              <Nav.Item>
                <Nav.Link eventKey="first">Liste films</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Ajouter une film</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">liste de clients </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            {" "}
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>liste de film</th>
                      <th>Nom de film </th>
                      <th>Modifier film</th>
                      <th>Supprimer film</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(movies).map((id) => (
                      <tr>
                        <td>
                          <Image
                            src={movies[id].poster}
                            style={{ height: "200px" }}
                          />
                          <br />
                          <Rater total={5} rating={movies[id].rate} />
                        </td>
                        <td>{movies[id].title}</td>
                        <td>
                          <Modif id={id} movies={movies} />

                          {/* <button
                            type="button"
                            class="btn btn-outline-warning w-25 m-l-100"
                          >
                            <Modif id={id} movies={movies} />
                            Modifier
                          </button> */}
                        </td>
                        <td>
                          <button onClick={() => supprimer(id)}>
                            supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Button
                  variant="primary"
                  onClick={handleShow}
                  className="modalle"
                >
                  Ajout
                </Button>
              </Tab.Pane>
              <Tab.Pane eventKey="third"></Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Film </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nom de Film </Form.Label>
              <Form.Control
                type="text"
                placeholder="nouveau  film"
                onChange={(e) => setAjout({ ...ajout, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>image de film </Form.Label>
              <Form.Control
                type="text"
                placeholder="Overview de film"
                onChange={(e) => setAjout({ ...ajout, poster: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Overview de film </Form.Label>
              <Form.Control
                type="text"
                placeholder="Overview de film"
                onChange={(e) =>
                  setAjout({ ...ajout, overview: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Release_date </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Release date  de film"
                onChange={(e) =>
                  setAjout({ ...ajout, release: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Rate de film </Form.Label>
              <Form.Control
                type="text"
                placeholder=" Rate de film"
                onChange={(e) => setAjout({ ...ajout, rate: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Genre de film </Form.Label>{" "}
              <Form.Control
                type="text"
                placeholder=" Genre de film"
                onChange={(e) => setAjout({ ...ajout, genre: e.target.value })}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Ajouter
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <br />
    </div>
  );
}

export default Admin;
