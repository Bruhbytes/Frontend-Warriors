import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar () {
  return (
    <>
      <div className='navbar'>
        <Navbar bg="dark" variant="dark">
          <Container>
            
            <Navbar.Brand href="#home">Pulse Fit</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#Heart">Is your heart fit?</Nav.Link>
                <Nav.Link href="#Community">Community</Nav.Link>
                <Nav.Link href="#Gyms">Gyms</Nav.Link>
                <Nav.Link href="#dr">Consult doctor</Nav.Link>
                <Nav.Link href="#shop">Shop</Nav.Link>  
              </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
export default NavBar;