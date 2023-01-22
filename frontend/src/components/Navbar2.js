import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar2.css"
import myImg from "./Pulse.png";
const Navbar2 = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <>
      <div className='navbar'>
        <Navbar bg="dark" variant="dark">
          <Container>
          
          <Navbar.Brand href="#home"><img id="logoImg-n" src={myImg}/></Navbar.Brand>
              <Nav className="me-auto">
              {user && (
            <>
              <span
              style={{ textDecoration: 'none',
              color:"white" }}>{user.email}</span>
              {/* <Nav.Link href="/appointment">Appointment</Nav.Link>
                <Nav.Link href="/map">FindGymsNearYou</Nav.Link> */}
                <Link to="/appointment"
                style={{ textDecoration: 'none',
                color:"white" }}>  _Appointment_ </Link>
              <Link to="/map"
              style={{ textDecoration: 'none',
              color:"white" }}>  FindGymsNearYou_ </Link>
              <Link to="/community"
              style={{ textDecoration: 'none',
              color:"white" }}> Community_ </Link>
              <button onClick={handleClick}
              style={{ textDecoration: 'none',
              color:"white" }}>Log out</button>
              </>
          )}
          {!user && (
            <div>
              <Link to="/login"
              style={{ textDecoration: 'none',
              color:"white" }}>Login</Link>
              <Link to="/signup"
              style={{ textDecoration: 'none',
              color:"white" }}>Signup</Link>
            </div>
          )}
                {/* <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#Heart">Is your heart fit?</Nav.Link>
                <Nav.Link href="#Community">Community</Nav.Link>
                <Nav.Link href="#pulsetransform">Pulse Transform</Nav.Link>
                <Nav.Link href="#dr">Consult doctor</Nav.Link>
                <Nav.Link href="/shop">Shop</Nav.Link>  
                <Nav.Link href="/about">about us</Nav.Link>  */}

                
              </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Navbar2