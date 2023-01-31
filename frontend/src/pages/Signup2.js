import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import myimg from "./logo.jpg";
const Signup2= () => {
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
    <>
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
          id="email"
          placeholder="Email"
        />
      </p>
      <div
      style={{margin:"5px"}}></div>
      
      <p className="name">
        <input
          name="name"
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
          placeholder="Password"
          id="name"
        />
      </p>
      <p className="name">
        <input
          name="name"
          type="number"
                  
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
          placeholder="Phone"
          id="name"
        />
      </p>

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

     
      <div className="submit">
        <input type="submit" defaultValue="SEND" id="button-blue" />
        <div className="ease" />
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  </div>
</div>

    </>
  )
}

export default Signup2