import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import myimg from "./logo.jpg";
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="limiter" >
      <div className="blac">
        <div className="cen">
          <div className="login100-pic js-tilt" data-tilt>
            <img src="https://th.bing.com/th/id/OIP.IVatgaI-R3n18w1yJkC2wgHaE8?pid=ImgDet&rs=1" alt="IMG"/>
          </div>
    <form className="login100-form validate-form" onSubmit={handleSubmit}>
    <span className="login100-form-title "style={{color:"green"}}>
              Login
            </span>
            <div className="wrap-input100 ">
      <label>Email address:</label>
      <input 
      className="input100"
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      </div>
      <div className="wrap-input100">
      <label>Password:</label>
      <input 
         className="input100"
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
</div>
<div className="container-login100-form-btn">
      <button disabled={isLoading} className="login100-form-btn" >Log in</button>
      </div>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
    </div>
    </div>
  )
}

export default Login