import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Navbar2() {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 200) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      //className={scrollNav ? 'bg-dark shadow' : ''}
      className={scrollNav ? 'navbar-scroll' : ''}
      style={{ backgroundColor: scrollNav ? '#174569' : 'transparent' }}
    >
      <Container>
        <Navbar.Brand href="#">Mi sitio web</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;
