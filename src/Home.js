import { Nav } from "react-bootstrap";
import NavBar from "./NavBar";
//import {myImg} from "./Pulse.png";
const Home = () => {

    return ( 
        <>
          <div className="Home">
            <NavBar/>
            <h2 id="pulsefit">pulse fit</h2>
            <img className="homeBgImg" src="https://media.istockphoto.com/photos/minimal-gym-dark-background-picture-id947343796?k=6&m=947343796&s=170667a&w=0&h=EOL7Lw7QMVSuo6x5c1FbzaowRF850P34kGZ8RS_8XOs="></img>
          </div>
        </>
     );
}
 
export default Home;
