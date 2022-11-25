import './App.css';
import './index.css'
import { useState } from "react";
import useFetch from "./useFetch";
// import userInfo from './data';

const Login = () => {

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
              setusername('');
              setpassword('');
          }
          else
          {
              console.log("Failure")
          }
      }
    return (  
      <div className='black'>

      <div className="limiter" >
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src="https://iili.io/H2BfCox.jpg" alt="IMG"/>
          </div>
          { error && <div>{ error }</div> }
              { isPending && <div>Loading...</div> }
              { data && 
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-title">
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
    </div>
    

    
);
      }
export default Login;