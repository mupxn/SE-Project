import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import OrderDetails from './OrderDetails';
function OrderEM() {
  return (
    <>
      <Navbar bg="light" sticky="top"expand="md" variant="light">
        <Container>
          <Navbar.Brand >
            <h3>Order</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="AlertOrder" >alert</Nav.Link>
            <Nav.Link href="History">history</Nav.Link>
            <Button variant="outline-primary" href="LoginEM">login</Button>{' '}
            
          </Nav>
        </Container>
      </Navbar>
      <br/>
      <div align="center" >
        <h5 >Queue</h5>
      </div>
      <div className="d-grid gap-2">
      <Button variant="light" size="lg" href="OrderDetails">
        <header variant="left">Order number : 11000</header> 
        <text> tayida chomsong</text>
      </Button>
      </div>
      <br/>
      <div className="d-grid gap-2">
      <Button variant="light" size="lg" href="OrderDetails">
        <header variant="left">Order number : 11000</header> 
        <text> tayida chomsong</text>
      </Button>
      </div>

    </>
    
  );
}

export default OrderEM;