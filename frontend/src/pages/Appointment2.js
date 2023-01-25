import { useState,useNavigate } from "react";

import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import "./Appointment2.css"
const Appointment2 = () => {
  // const navigate = useNavigate();
    const { user } = useAuthContext();
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [Phone, setPhone] = useState("");
    const [Slot, setSlot] = useState(" ");
  const [error, setError] = useState(" ");
  const [emptyFields, setEmptyFields] = useState([]);

  const handleChange = (event) => {
    console.log("Label 👉️", event.target.selectedOptions[0].label);
    console.log(event.target.value);
    setSlot(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
        console.log( Name,Address,Phone,Slot);
    if (!user) {
      setError("You must be logged in");
      return;
    }

    const details = { Name,Address,Phone,Slot };

    const response = await fetch("/api/doctor/appointment", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
console.log(json);
if(json==="Appointment exists")
{
  
  setError("Appointment exists");
  setName("");
      setAddress("");
      setPhone("");
      setSlot("");
      // setError(null);
      setEmptyFields([]);
}
// console.log(error)
    else if (!response.ok) {
      // <Navigate to="/" replace={true} />
      setError(json.error);
      // navigate('/');
      console.log(error);
      
      setEmptyFields(json.emptyFields);
    }
    else {
      setName("");
      setAddress("");
      setPhone("");
      setSlot("");
      setError(null);
      setEmptyFields([]);
    //   dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
    return (
<>

<div>
  {/* component */}
  {/* Container */}
  
  <div className="container mx-auto">
  
    <div className="flex justify-center px-6 my-12">
      {/* Row */}
      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
        {/* Col */}
        <div
          className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
          //className="contact"
          style={{
            width:'600px',
            background:
              'url("https://th.bing.com/th/id/OIP.3AQguUw_g2ferUROBL9sxAHaE7?pid=ImgDet&w=1000&h=666&rs=1")'
            
          }}
        />
        {/* Col */}
        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none"
       >
          <h3 className="pt-4 text-2xl text-center"><h3
           style={{color:"black"}}>Take an appointment:</h3></h3>
          <form  onSubmit={handleSubmit}>

            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="floating_first_name"
                  name="user_name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={Name}
                  placeholder="First Name"
                  required=""
                />
              </div>
              {/* <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="lastName"
                >
                  lastName
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="floating_last_name"
                  name="floating_name"
                  type="text"
                  placeholder="Last Name"
                  required=""
                />
              </div> */}
            </div>
            
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Address
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="floating_email"
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  value={Address}
                  name="user_email"
                  placeholder=""
                  required=""
                />
              
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="c_password"
                >
                  Phone
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="floating_company"
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
            value={Phone}
                  name="message"
                  placeholder="+91 123456789"
                  required=""
                />
              </div>
              
            </div>
            <div className="mb-6 text-center">
            <select
            
            value={Slot}
            onChange={handleChange}
  
    id="branches"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected="">Choose your slot</option>
    <option value="1">1 pm</option>
    <option value="2">2 pm</option>
    <option value="3">3 pm</option>
    <option value="4">4 pm</option>
   
    
  </select>

              <button
             type="submit"
             className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
             Submit
             </button>
             {error && <div >{error}</div>}
            </div>
           
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</>
       
        );
}
 
export default Appointment2 ;