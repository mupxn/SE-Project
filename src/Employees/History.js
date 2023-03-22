import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LoginIcon from '@mui/icons-material/Login';
import HistoryIcon from '@mui/icons-material/History';
import OrderDetails from './OrderDetails';

import HomeIcon from '@mui/icons-material/Home';
function History() {
  return (
    <>
       <Navbar bg="dark" variant="dark" sticky="top"expand="md" >
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
      <OrderDetails/>
    </div>

    </>
    
  );
}

export default History;
;