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
        <div  >
            <div className="split left" >
                <div className="centered">
                {/* <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" className='centered'/> */}
                 <img src='https://iili.io/H2BfCox.jpg'/> 
                </div>
            </div>
            <div className="split right">
                <div className="centered">
                { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && 
      <form onSubmit={handleSubmit}>
        <div>
          Hii Hello Again!!
        </div>
      <div><label>Username:</label>
      <input 
        type="text" 
        required 
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      </div>
      <div className='tp'><label>Password:</label>
      <input 
        type="password" 
        required 
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
    </div>
    <div>
    <button>Login</button>
     </div> </form>
      
    }
                    
                </div>
            </div>
        </div>


    );
}
 
export default Login;