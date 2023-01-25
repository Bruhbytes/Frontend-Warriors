import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'

import "./Create2.css"
const Create2 = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(0);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user } = useAuthContext()


    // const details2 = { username: "Om" };
    // const response2 = await fetch('/get-calculations', {
    //     method: 'POST',
    //     body: JSON.stringify(details2),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // console.log("--------->", response2)

    const handleChange = (event) => {
        console.log("Label 👉️", event.target.selectedOptions[0].label);
        console.log(event.target.value);
        setGender(event.target.value);
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userr= user.email;
        const temp = Math.pow((height / 100), 2);
        console.log(temp);
        const temp2 = weight / temp;
        console.log(`temp2: ${temp2}`)
        setBmi(temp2);

        const details = { age, gender, height, weight, username:userr , bmi: temp2 };
        console.log(details);
        const response = await fetch('/h/calculate', {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        })



        console.log(height, weight);
        const json = await response.json();
        console.log(`json: ${json}`)
        console.log(`response.ok: ${response.ok}`)

        if (!response.ok) {
            setError(json.error);
        }
        else if (response.ok) {
            if (temp2 < 18.5) {
                navigate(`/underweight?=${temp2.toString()}`);
            }
            else if (temp2 >= 18.5 && temp2 < 25) {
                navigate(`/normal?=${temp2.toString()}`);
            }
            else if (temp2 >= 25) {
                navigate(`/overweight?=${temp2.toString()}`);
            }
            setAge('');
            setGender('');
            setHeight('');
            setWeight('');
            setError(null);
            setBmi(0);
            console.log(`New data: ${json}`);
        }
    }
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
                    backgroundImage:
                      'url("https://media.istockphoto.com/photos/my-bmi-formula-written-on-a-page-body-mass-index-picture-id635776320?k=6&m=635776320&s=170667a&w=0&h=_ViVXc-UpBS-NanZDl6MD3YRPk9aBV-xiHcNvTYZlRM=")'
                    
                  }}
                />
                {/* Col */}
                <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none"
               >
                  <h3 className="pt-4 text-2xl text-center"><h3
                  style={{color:"black"}}>Calculate BMI:</h3></h3>
                  <form  onSubmit={handleSubmit}>
        
                    <div className="mb-4 md:flex md:justify-between">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                          className="block mb-2 text-sm font-bold text-gray-700"
                          htmlFor="firstName"
                        >
                          Age:
                        </label>
                        <input
                          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="floating_first_name"
                          
                          type="text"
                          required
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          placeholder="Age"
                          
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
                          Height
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="floating_email"
                          
                          type="text"
                          required
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          placeholder="in cm"
                        />
                      
                      </div>
                      <div className="md:ml-2">
                        <label
                          className="block mb-2 text-sm font-bold text-gray-700"
                          htmlFor="c_password"
                        >
                          Weight
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="floating_company"
                          type="text"
                          required
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          placeholder="in kg"
                        />
                      </div>
                      
                    </div>
                    <div className="mb-6 text-center">
                    <select
                    
                    value={gender}
                    onChange={handleChange}
          
            id="branches"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="">Choose your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            
           
            
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

export default Create2;