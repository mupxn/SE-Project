import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LoginIcon from '@mui/icons-material/Login';
import HistoryIcon from '@mui/icons-material/History';

import HomeIcon from '@mui/icons-material/Home';
function History() {
  return (
    <>
      <Navbar bg="light" sticky="top"expand="md" variant="light">
        <Container>
          <Navbar.Brand >
            <h3>History</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
       <Nav className="justify-content-right">
          <Nav.Link href="OrderEM" > <HomeIcon/></Nav.Link>
          <Nav.Link href="/" ><LoginIcon/></Nav.Link>
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