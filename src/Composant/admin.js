import React from "react";
import "react-bootstrap";
import "../App.css";
import { Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

function Admin({ Movies }) {
  const supprimer = (id, e) => {
    axios.delete(`http://localhost:3005/posts/${id}`).then((res2) => {
      console.log(res2);
    });
  };

  const [ajout, setAjout] = useState({
    title: "",
    poster: "",
    rate: "",
    poster: "",
    overview: "",

    release: "",
    genre: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3005/posts`, ajout).then((res) => {
      console.log(res);
    });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
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
          {Movies.map((el) => (
            <tr>
              <td>
                <Image src={el.poster} style={{ height: "200px" }} />
              </td>
              <td>{el.title}</td>
              <td>
                {" "}
                <button variant="primary">Modifier</button>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modifier ce Film</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input type="text" value={el.Rate} />
                    <input type="text" value={el.title} />
                    <input type="text" value={el.poster} />
                    <input type="text" value={el.overview} />
                    <input type="text" value={el.release_date} />
                    <input type="text" value={el.genre} />
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Fermer
                    </Button>
                    <Button variant="primary">souvgarder</Button>
                  </Modal.Footer>
                </Modal>
              </td>
              <td>
                <button onClick={(e) => supprimer(el.id, e)}>supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <br />

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
            onChange={(e) => setAjout({ ...ajout, overview: e.target.value })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Release_date </Form.Label>
          <Form.Control
            type="text"
            placeholder=" Release date  de film"
            onChange={(e) => setAjout({ ...ajout, release: e.target.value })}
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
          <Form.Label>Genre de film </Form.Label>
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
    </div>
  );
}

export default Admin;
