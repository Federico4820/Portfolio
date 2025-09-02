import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroLogoSVG from "../assets/HeroLogo.svg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          {/* Logo a sinistra */}
          <Col md={6} className="text-center">
            <div className="hero-logo">
              <img
                src={HeroLogoSVG}
                alt="Logo"
                className="img-fluid hero-logo-img"
              />
            </div>
          </Col>

          {/* Testo a destra */}
          <Col md={6}>
            <div className="hero-text">
              <h1 className="display-4 fw-bold">Federico Lepore</h1>
              <h2 className="mb-4">Sviluppatore Full Stack</h2>
              <p className="lead">
                Benvenuto all'interno del mio portfolio, dove potrai dare un
                occhiata più da vicino ai miei progetti. Troverai anche tutto
                ciò che riguarda le mie competenze nell'ambito web.
              </p>
              <Link to="/about" className="btn btn-primary">
                Scopri di più
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
