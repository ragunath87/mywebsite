import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../../../src/styles/styles.scss';

function Navigation() {
  return (
    <header>
        <Navbar expand="lg">
            <Container>
            <Navbar.Brand className='navBrand' href="#home">Ragunath Srinivasan</Navbar.Brand>
            <Navbar.Toggle aria-controls="Main Navbar" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="HeaderLinks">
                  <Nav.Link className='text-white' href="#link">About Me</Nav.Link>
                  <Nav.Link className='text-white' href="#link">Portfolio</Nav.Link>
                  <Nav.Link className='text-white' href="#link">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default Navigation;