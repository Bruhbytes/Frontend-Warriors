import './App.css';
import './index.css'
import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

// import userInfo from './data';
import myimg from "./logo.jpg";

const Login = () => {
  let history = useHistory();

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    
    const { data, isPending,error } = useFetch('http://localhost:8000/data')

    const handleSubmit = (e) => {
      console.log(username,password);
        e.preventDefault();
        const foundUser = data.find(obj => (
            obj.username === username && obj.password===password
        ))
          if(foundUser)
          {
              console.log("Success")
              history.push({
                pathname: '/Community',
                
                state: { username: {username} }
            });
          }
          else
          {
              console.log("Failure")
          }
      }
    return (  
      

      <div className="limiter" >
      <div className="blac">
        <div className="cen">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={myimg}alt="IMG"/>
          </div>
          { error && <div>{ error }</div> }
              { isPending && <div>Loading...</div> }
              { data && 
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-title "style={{color:"green"}}>
              HII Hello Again!!
            </span>
  
            <div className="wrap-input100 ">
              <label>Username:</label>
              <input 
              className="input100"
          type="text" 
          required 
          value={username}
          onChange={(e) => setusername(e.target.value)}/>
  
  
            </div>
  
            <div className="wrap-input100">
              <label>Password:</label>
              <br/>
              <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                Login
              </button>
            </div>
  
            
          </form>
        }</div>
      </div>
    </div>
    
    

    
);
      }
export default Login;