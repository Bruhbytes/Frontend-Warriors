

import bgimg from "./Homebg.png";
import { Link } from "react-router-dom";
const Home = () => {

    return ( 
        <>
          <div className="Home">

            <h2 id="pulsefit">Believe you can and you're halfway there....</h2>
            <div>
            {/* <Link to="./aboutus" is="aboutus">about us</Link> */}
            </div>
            <img className="homeBgImg" src={bgimg}/>
          </div>
        </>
     );
}
 
export default Home;
