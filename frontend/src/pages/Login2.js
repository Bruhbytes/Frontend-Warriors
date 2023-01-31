import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import myimg from "./logo.jpg";
import "./Login2.css"
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <>
       
    <div className="loginbg">
    <p>login</p>
    <div id="form-main">
    <img className="homeBgImg" src="http://thekitemap.com/images/feedback-img.jpg"/>
  <div id="form-div">
    <form className="form" id="form1" onSubmit={handleSubmit}>
      
      <p className="email">
        <input
          name="email"
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          className="validate[required,custom[email]] feedback-input"
          id="email"
          placeholder="Email"
        />
      </p>
      <p className="name">
        <input
         // className="input100"
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
          placeholder="Password"
          id="name"
        />
      </p>

      <div className="submit">
        <input type="submit" defaultValue="SEND" id="button-blue" />
        <div className="ease" />
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  </div>
</div>


</div>


</>
  )
}

export default Login