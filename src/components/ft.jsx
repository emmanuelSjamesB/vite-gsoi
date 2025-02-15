import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo-3.png'; // Asegúrate de tener la ruta correcta
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Iconos de redes sociales

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <Container>
        <Row>
          {/* Logo y descripción */}
          <Col md={4} className="mb-4">
            <img src={logo} alt="Logo" className="mb-3" style={{ width: '150px' }} />
            <p className="text-muted">
              Somos una empresa comprometida con la innovación y la calidad en soluciones tecnológicas.
            </p>
          </Col>

          {/* Enlaces rápidos */}
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase mb-4">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#scrollspyHeading1" className="text-white text-decoration-none">Inicio</a>
              </li>
              <li className="mb-2">
                <a href="#scrollspyHeading2" className="text-white text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#scrollspyHeading3" className="text-white text-decoration-none">Solutions</a>
              </li>
              <li className="mb-2">
                <a href="#scrollspyHeading4" className="text-white text-decoration-none">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#scrollspyHeading5" className="text-white text-decoration-none">Recent News</a>
              </li>
            </ul>
          </Col>

          {/* Contacto y redes sociales */}
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase mb-4">Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-muted">Email: </span>
                <a href="mailto:info@empresa.com" className="text-white text-decoration-none">info@empresa.com</a>
              </li>
              <li className="mb-2">
                <span className="text-muted">Teléfono: </span>
                <a href="tel:+123456789" className="text-white text-decoration-none">+123 456 789</a>
              </li>
              <li className="mb-2">
                <span className="text-muted">Dirección: </span>
                <span className="text-white">Calle Falsa 123, Ciudad, País</span>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="text-uppercase mb-4">Síguenos</h5>
              <a href="https://facebook.com" className="text-white me-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white me-3">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" className="text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Derechos de autor */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} James. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;