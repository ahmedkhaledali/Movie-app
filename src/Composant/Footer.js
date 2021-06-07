import React from "react";
import "react-bootstrap";
import "../App.css";
import Image from "react-bootstrap/Image";
import Logo from "./images/logo.png";
import { Row, Container, Col } from "react-bootstrap";

const footer = [
  {
    lienrapide: "Acceuil",
  },
  { lienrapide: "Contact" },
  { lienrapide: "Favories" },
];

function Footer1(props) {
  return (
    <div className="ff">
      <Container className="themed-container " fluid={true}>
        <Row className="justify-content-center p-4">
          <Image src={Logo} style={{ width: "80px", height: "50px" }} />
        </Row>
        <Row className="justify-content-around p-1">
          <Col md={4}>
            <h3>A Propos</h3>
            <p className="prp">
              Offrir aux cinéphiles une source pratique et rapide d'informations
              sur le cinéma, tout en facilitant l'accès aux salles, c'est la
              mission d'AlloCiné. AlloCiné peut être joint 24h/24 en quelques
              secondes par téléphone au 216 27668918, sur Internet
              (www.Movies.fr) ou votre smartphone et votre tablette. Si vous
              avez des questions relatives à l'achat de billets, n'hésitez pas à
              nous écrire à adm@allocine.fr. Pour toutes autres questions ou
              remarques consultez la rubrique
            </p>
          </Col>
          <Col md={4}>
            <h3>Lien rapide</h3>
            {props.ftt.map((el) => (
              <ul>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "Lobster",
                  }}
                >
                  {" "}
                  {el.lienrapide}{" "}
                </a>
              </ul>
            ))}
          </Col>
          <Col md={4}>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon> <br />
            <div class="elfsight-app-d3bc7f9f-5a91-4dfd-901d-c7df4e54bfb6"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <Footer1 ftt={footer} />
    </div>
  );
}

export default Footer;
