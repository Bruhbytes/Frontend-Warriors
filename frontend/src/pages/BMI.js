import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BMI.css"

const Home = () => {
    const [healthParameters, setParameters] = useState(null)

    useEffect(() => {
        const fetchParameters = async () => {
            const response = await fetch('/h/calculate')
            const json = await response.json()
            console.log(`response.ok: ${response.ok}`);
            if (response.ok) {
                setParameters(json)
            }
        }

        fetchParameters();
    }, [])
    return (
<>
            <div className="cards">
  <div className="mohatsavcard1"> 
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className="rounded-t-lg"
        src="https://api.parashospitals.com/uploads/2016/10/What-Should-Be-Ideal-BMI.jpg"
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        style={{color:"black"}}>
          BMI introduction
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. 😀
      </p>
      <a
        href="https://study.com/academy/lesson/what-is-bmi-definition-formula-calculation.html"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
  </div>
=

 
  <div className="mohatsavcard2"> 
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className="rounded-t-lg"
        src="https://www.rd.com/wp-content/uploads/2019/05/food-healthy.jpg"
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        style={{color:"black"}}>
          healthy diet
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Consuming a healthy diet throughout the life-course helps to prevent malnutrition in all its forms as well as a range of noncommunicable diseases (NCDs) and conditions.
      </p>
      <a
        href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
  </div>

  

  <div className="mohatsavcard3"> 
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className="rounded-t-lg"
        src="https://thehomoeopathy.in/wp-content/uploads/2021/07/BMI_Chart_adult_image.png"
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        style={{color:"black"}}>
        BMI Table for Adults
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Many factors can contribute to a person’s weight. These factors include environment, family history and genetics, metabolism, and behavior or habits.
      </p>
      <a
        href="https://www.bing.com/ck/a?!&&p=ad745acbacd49258JmltdHM9MTY3NDUxODQwMCZpZ3VpZD0yYjllNWNjYy02YzMzLTZjY2QtMmE3MS00ZGRhNmQ4MTZkNTkmaW5zaWQ9NTE4MA&ptn=3&hsh=3&fclid=2b9e5ccc-6c33-6ccd-2a71-4dda6d816d59&psq=bmi+table+tell+us&u=a1aHR0cDovL25obGJpLm5paC5nb3YvaGVhbHRoL2VkdWNhdGlvbmFsL2xvc2Vfd3QvQk1JL2JtaWNhbGMuaHRt&ntb=1"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
  </div>
  </div>

  

  
            

            <Link to="/calculate">
                <button className="bmi" role={"button"}>Calculate BMI</button>
            </Link>
       
            </>
    );
}

export default Home;