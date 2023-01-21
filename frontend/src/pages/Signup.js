import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import myimg from "./logo.jpg";
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()
  const [phone, setphone] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email,password,phone,gender);

    await signup(email, password,phone,gender)
  }

  return (
    <div className="limiter">
      <div className="blac">
        <div className="cen">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={myimg} alt="IMG" />
          </div>
    <form className="login100-form validate-form" onSubmit={handleSubmit}>
    <span className="login100-form-title" style={{color:"green"}}>New User??</span>
    <div className="wrap-input100 " >
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      </div>
      <div className="wrap-input100 " ></div>
      <label>Password:</label>
      <div className="wrap-input100 " >
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
</div>

<div className="wrap-input100">
                <label>Phone:</label>
                <br/>
                <input
                  type="number"
                  
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
              <div className="wrap-input100">
                <label>Gender:</label>
                <br/>
                
                <select
  value={gender}
  onChange={(e) => setGender(e.target.value)}
    id="branches"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected="">Choose your gender</option>
    <option value="Male">Male</option>
    <option value="F">Female</option>
    
  </select>
              </div>

              <div className="container-login100-form-btn">
      <button disabled={isLoading} className="login100-form-btn">Sign up</button>
      </div>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
    </div>
    </div>
  )
}

export default Signup