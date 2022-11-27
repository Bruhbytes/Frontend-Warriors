import 'flowbite';
import "./index.css";
import { useState, useContext } from "react";
import useFetch from "./useFetch";
 

const Community = ({UserContext}) => {
  const {username, setUsername} = useContext(UserContext);
  const { data, isPending,error } = useFetch('http://localhost:8001/posts');

const[message,setmessage]=useState("");
console.log(username);

    return (
    <div>    
    {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
            

            {/* data && form form  */}
                  <ul>{data && data.map(dat => (
                    
                     
                    //   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    //   <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  
                      <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cen">
                    <div href="#" className='' key={dat.id} >
                         <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{dat.name}</h1>
                        <p className='"font-normal text-gray-700 dark:text-gray-400'>{dat.message}</p> 
                        {/* <h1>{dat.name}</h1> 
                        <p>{dat.message}</p> */}
                    </div>
                     </a>
                  )) }
                  </ul>

            <p>{data && <Form message={message} setmessage={setmessage} username={username}  />}</p>

    </div>
              );
          }
 
const Form = ({message, setmessage, username}) => {
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HII");
    console.log(username);
    const name = username;
      const data2 = { message, name };
      console.log(data2);
      
          fetch('http://localhost:8001/posts', 
            {
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data2)
            })
           .then(() => {
  //       // history.go(-1);
        // history.push('/');
            })
            
       }    
       console.log(username);
    
    return (
                    <form onSubmit={handleSubmit}  >
                          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
                              required
                              value={message}
                              onChange={(e) => { setmessage(e.target.value); console.log(message); } }></textarea>
                          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ">

                              Post
                          </button>
                      </form>

    )
}
export default Community;