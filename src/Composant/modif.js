import { Form, Container, Button, Row, Modal, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Rater from "react-rater";
import Image from "react-bootstrap/Image";
const Modif = ({ Movies, id }) => {
  const [input, setInput] = useState({
    title: Movies[id].title,
    rate: Movies[id].rate,
    poster: Movies[id].poster,
    overview: Movies[id].overview,
    release: Movies[id].release_date,
    genre: Movies[id].genre,
  });

  const handelCahnge = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  // function update
  const updateMovie = (id) => {
    axios
      .put(`http://localhost:3005/posts/${id}`, input)
      .then((response) => {
        setInput(response.data);
      })
      .catch((err) => console.log(err));
    console.log("updateuuuuuuuuuuueeeeeee", input);
  };
  useEffect(() => {
    updateMovie();
  }, []);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  return (
    <div>
      <Button onClick={handleShow1} className="edit ">
        <i class="fas fa-edit"></i>
      </Button>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group>
                <Form.Label>title movie</Form.Label>
                <br></br>
                <Form.Control
                  defaultValue={Movies[id].title}
                  type="text"
                  name="title"
                  onChange={handelCahnge}
                  placeholder="Enter title"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>genre</Form.Label>
                <br></br>
                <Form.Control
                  defaultValue={Movies[id].genre}
                  type="text"
                  name="genre"
                  onChange={handelCahnge}
                  // onChange={handleChange}
                  placeholder="genre"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Release</Form.Label>
                <br></br>
                <Form.Control
                  defaultValue={Movies[id].release_date}
                  type="text"
                  name="release"
                  onChange={handelCahnge}
                  // onChange={handleChange}
                  placeholder="year"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Rate</Form.Label>
                <br></br>
                <Form.Control
                  defaultValue={Movies[id].rate}
                  type="text"
                  name="rate"
                  onChange={handelCahnge}
                  // onChange={handleChange}
                  placeholder="Runtime"
                />
                <Rater total={5} rating={Movies[id].rate} />
              </Form.Group>
              <Form.Group>
                <Form.Label>image movie</Form.Label>
                <br></br>
                <Form.Control
                  defaultValue={Movies[id].poster}
                  type="text"
                  name="poster"
                  onChange={handelCahnge}
                  placeholder="Enter url"
                />
                <Image src={Movies[id].poster} style={{ height: "200px" }} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Overview movie</Form.Label>
                <br></br>
                <Form.Control
                  defaultValue={Movies[id].overview}
                  type="text"
                  name="overview"
                  onChange={handelCahnge}
                  placeholder="Enter rating movie"
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  className="mr-3"
                  onClick={handleClose1}
                >
                  Close
                </Button>
                <Button
                  onClick={() => updateMovie(id)}
                  variant="primary"
                  className="submit"
                >
                  update
                </Button>
              </div>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modif;
