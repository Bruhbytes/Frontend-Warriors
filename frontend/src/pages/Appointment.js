import { useState,useNavigate } from "react";

import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

const Appointment = () => {
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
        <form className="create" onSubmit={handleSubmit}>
          <h3>Take Appointment</h3>
  
          <label>Your Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={Name}
            className={emptyFields.includes("Name") ? "error" : ""}
          />
  
          <label>Address</label>
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={Address}
            className={emptyFields.includes("Address") ? "error" : ""}
          />
  
          <label>Phone</label>
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={Phone}
            className={emptyFields.includes("Phone") ? "error" : ""}
          />
          <div classname="pl-8">
            <div className="relative w-full lg:max-w-sm">
             Slot
              <select
                className={emptyFields.includes("Slot") ? "error" : ""}
                value={Slot}
                onChange={handleChange}
              >
                <option value="1">1 pm</option>
                <option value="2">2 pm</option>
                <option value="3">3 pm</option>
                <option value="4">4 pm</option>
               
              </select>
            </div>
          </div>
          <div className="pb-8">
            <button>Add </button>
            {error && <div >{error}</div>}
          </div>
        </form> 
        </> );
}
 
export default Appointment;