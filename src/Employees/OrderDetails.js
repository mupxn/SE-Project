import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


function OrderDetails() {
  return (
    <>
      <Navbar bg="light" sticky="top"expand="md" variant="light">
        <Container>
          <Navbar.Brand >
            <h3>OrderDetails</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
        <Nav className="justify-content-right">
            <Nav.Link href="OrderEM">black</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

    </>
    
  );
}

export default OrderDetails;