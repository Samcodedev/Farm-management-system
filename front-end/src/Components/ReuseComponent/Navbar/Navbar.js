import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom'

function Navication() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#">Farm management system</Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  FMS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                  <br/ >
                  <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                  <Nav.Link><Link to='/AdminProfile'>Dashboard</Link></Nav.Link>
                  <Nav.Link><Link to='/Details'>Stock details</Link></Nav.Link>
                  <Nav.Link><Link to='/CreateStock'>Create Stock</Link></Nav.Link>
                  <Nav.Link><Link to='/UpdateStock'>Update Stock</Link></Nav.Link>
                  <Nav.Link><Link to='/Cart'>Cart</Link></Nav.Link>
                  <Nav.Link><Link to='/Categories'>Products Categories</Link></Nav.Link>
                  <Nav.Link href="#action3">About Us</Nav.Link>
                  <Nav.Link href="#action2">Contact Us</Nav.Link>
                  <NavDropdown
                    title="More options"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item><Link to="/Login">LogIn</Link></NavDropdown.Item>
                    <NavDropdown.Item to="#action4">
                      <Link to='/Register'>Register</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navication;