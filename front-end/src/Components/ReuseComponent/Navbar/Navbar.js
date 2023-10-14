import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, useNavigate} from 'react-router-dom'

function Navication() {

  const navigate = useNavigate()

  function logout(){
    localStorage.clear('accessToken')
    navigate('/')
  }

  function profileRoute(){
    const token = localStorage.getItem('accessToken')
    if(token){
      navigate('/AdminProfile')
    }
    else{
      navigate('/Login')
    }
  }

  function CreateStockRoute(){
    const token = localStorage.getItem('accessToken')
    if(token){
      navigate('/CreateStock')
    }
    else{
      navigate('/Login')
    }
  }

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
                  <Nav.Link onClick={profileRoute}>Dashboard</Nav.Link>
                  <Nav.Link><Link to='/Categories'>Listed Stocks Categories</Link></Nav.Link>
                  <Nav.Link><Link to='/DataTable'>Stock Data Table</Link></Nav.Link>
                  <Nav.Link onClick={CreateStockRoute}>Create Stock</Nav.Link>
                  <Nav.Link><Link to='/Cart'>Cart</Link></Nav.Link>
                  {/* <Nav.Link><Link to='/'>About Us</Link></Nav.Link>
                  <Nav.Link href="#action2">Contact Us</Nav.Link> */}
                  <NavDropdown
                    title="More options"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item><Link to="/Login">LogIn</Link></NavDropdown.Item>
                    <NavDropdown.Item to="#action4">
                      <Link to='/Register'>Register</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" onClick={logout}>
                      LogOut
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