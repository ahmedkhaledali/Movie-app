import React, { Component } from "react";
import "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Logo from "./images/logo.png";
import "../App.css";
import { Link } from "react-router-dom";

function Navbare({ handelchange, Addfavorie }) {
  return (
    <div>
      <Navbar bg="transparant" variant="light" fixed="top">
        <Navbar.Brand href="#home">
          <img src={Logo} style={{ width: "50px", height: "50px" }} />
        </Navbar.Brand>
        <Nav className="mx-auto ">
          <Link to="/">Acceuil</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/favories">Favories({Addfavorie})</Link>
        </Nav>
        <Form inline className="d-flex justify-content-between">
          <FormControl
            type="text"
            placeholder="Search"
            className="search"
            onChange={handelchange}
          />
          {/* <ion-icon name="search-circle-outline"></ion-icon> */}
          <div className="btnt">
            <img src="https://img.icons8.com/ios/35/000000/user-male-circle.png" />
          </div>
        </Form>
      </Navbar>

      {/* <p className="titre">Tourner un film<br/> doit être une joie</p>
<p className="stitre">N'hésitez pas de regarder</p>
<button className="btt" >l'heure du show </button> */}
    </div>
  );
}

export default Navbare;
