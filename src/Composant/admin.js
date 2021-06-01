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

function Admin({ movies }) {
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
      .then((res) => {
        console.log(res);
      });
  };

  //   const supprimer = (id) => {
  //     axios.delete(`http://localhost:3005/posts${id}`).then((res2) => {
  //       console.log(res2);
  //     });
  //   };

  const supprimer = (id) => {
    axios
      .delete(`https://app2-861f5-default-rtdb.firebaseio.com/posts/${id}.json`)
      .then((res2) => {
        console.log(res2.data);
      });
  };
  useEffect(() => {
    supprimer();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="modalle">
        Ajout
      </Button>

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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

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
                <Image src={movies[id].poster} style={{ height: "200px" }} />
                <br />
                <Rater total={5} rating={movies[id].rate} />
              </td>
              <td>{movies[id].title}</td>
              <td>
                {" "}
                <button>
                  <div>
                    <Modif id={id} movies={movies} />
                  </div>
                  Modifier
                </button>
                {/* <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modifier ce Film</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Rater total={5} rating={el.rate} />
                    <br />
                    <input type="text" defaultValue={el.title} />
                    <br />
                    <Image src={el.poster} style={{ height: "200px" }} />
                    <br />
                    <input type="text" defaultValue={el.overview} />
                    <br />
                    <input type="text" defaultValue={el.release_date} />
                    <br />
                    <input type="text" defaultValue={el.genre} />
                    <br />
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Fermer
                    </Button>
                    <Button variant="primary">souvgarder</Button>
                  </Modal.Footer>
                </Modal> */}
              </td>
              <td>
                <button onClick={() => supprimer(id)}>supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <br />
    </div>
  );
}

export default Admin;
