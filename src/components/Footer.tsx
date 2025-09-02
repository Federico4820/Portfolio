import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="custom-footer py-5 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          {/* Sezione contatti */}
          <Col md={4} className="mb-3">
            <h5 className="footer-title">Contatti</h5>
            <p>
              Email:{" "}
              <a href="mailto:federico@lepore.pro">federico@lepore.pro</a>
            </p>
            <p>Telefono: +39 331 292 8875</p>
          </Col>

          {/* Sezione link rapidi */}
          <Col md={4} className="mb-3">
            <h5 className="footer-title">Link Rapidi</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>

          {/* Sezione social */}
          <Col md={4} className="mb-3">
            <h5 className="footer-title">Seguimi</h5>
            <a
              href="https://github.com/Federico4820"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/federico-lepore-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:federico@lepore.pro">
              <FaEnvelope size={24} />
            </a>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Federico Lepore. Tutti i diritti
              riservati.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
