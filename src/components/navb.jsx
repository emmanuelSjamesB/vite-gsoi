
import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assets/img/logo-3.png';

function Navbarq() {
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
      className={scrollNav ? 'navbar-scroll' : ''}
      style={{ backgroundColor: scrollNav ? '#174569' : 'transparent' }}
    >
      <Container fluid fixed-top >
        <Navbar.Brand href="#"><img src={logo} className="d-block w-100" alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" data-bs-toggle="collapse" data-bs-target="#navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#scrollspyHeading1"></a>
            </li >
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading2">About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading3">Solutions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading4">Contact
              </a>
            </li>
            <li className="nav-item"> 
              <a className="nav-link" href="#scrollspyHeading5">Recent News</a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarq;