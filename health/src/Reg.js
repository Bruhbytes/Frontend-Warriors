import "./App.css";
import "./index.css";
import { useState } from "react";
// import {  useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import myimg from "./logo.jpg";
const Reg = () => 
{
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [repassword, setrepassword] = useState("");
  const [gender, setgender] = useState("");
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const { data, isPending, error } = useFetch("http://localhost:8000/data");
  const handleSubmit = (e) => 
  {
    console.log("HII");
  
      e.preventDefault();
      const data2 = { username,password,phone,gender,height,weight };
      console.log(data2);
      const foundUser = data.find(obj => (
        obj.username === username 
    ))
      {
        password===repassword && !foundUser?
          fetch('http://localhost:8000/data/', 
            {
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data2)
            })
           .then(() => {
  //       // history.go(-1);
        // history.push('/');
            })
            :console.log("failure")
       }    
    }    
  return (
    <div className="limiter">
      <div className="blac">
        <div className="cen">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={myimg} alt="IMG" />
          </div>
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {data && (
            <form
              className="login100-form validate-form"
              onSubmit={handleSubmit}
            >
              <span className="login100-form-title" style={{color:"green"}}>New User??</span>

              <div className="wrap-input100 " >
                <label >Username:</label>
                <input
                  
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
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
              <div className="wrap-input100">
                <label>Password:</label>
                <input
                  type="password"
                  required
                  value={repassword}
                  onChange={(e) => setrepassword(e.target.value)}
                />
              </div>
              <div className="wrap-input100">
                <label>Phone:</label>
                <input
                  type="number"
                  required
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
              <div className="wrap-input100">
                <label>Height:</label>
                <input
                  type="number"
                  required
                  value={height}
                  onChange={(e) => setheight(e.target.value)}
                />
              </div>
              <div className="wrap-input100">
                <label>Weight:</label>
                <input
                  type="number"
                  required
                  value={weight}
                  onChange={(e) => setweight(e.target.value)}
                />
              </div>
              <div className="wrap-input100">
                <label>Gender:</label>
                <select
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                Submit
              </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reg;
