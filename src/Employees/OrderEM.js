import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LoginIcon from '@mui/icons-material/Login';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HistoryIcon from '@mui/icons-material/History';
function OrderEM() {
  return (
    <>
      <Navbar bg="light" sticky="top"expand="md" variant="light">
        <Container>
          <Navbar.Brand >
            <h3>Order</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
           <Nav className="justify-content-right">
            <Nav.Link href="AlertOrder" ><NotificationsIcon/></Nav.Link>
            <Nav.Link href="History" ><HistoryIcon/></Nav.Link>
            <Nav.Link href="/" ><LoginIcon/></Nav.Link>
            
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