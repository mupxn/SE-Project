import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
function History() {
  return (
    <>
      <Navbar bg="light" sticky="top"expand="md" variant="light">
        <Container>
          <Navbar.Brand >
            <h3>History</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="OrderEM" >home</Nav.Link>
            <Button variant="outline-primary" href="LoginEM">login</Button>{' '}
            
          </Nav>
        </Container>
      </Navbar>
      <br/>
      <div align="center" >
        <h5 >Order History</h5>
      </div>
      <div className="d-grid gap-2">
      <Button variant="light" size="lg">test</Button>
    </div>

    </>
    
  );
}

export default History;
;