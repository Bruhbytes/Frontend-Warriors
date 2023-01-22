import Card from 'react-bootstrap/Card'
// import 'flowbite';
import myHeart from "./heart.jpg"
import myDoc from "./doctor.jpeg"
import abbg from "./aboutbg2.png"
import myExercise from "./exercise.jpg"
import myShop from "./shop.jpeg"

const About = () => {
    return (  
        < >
        <div className='about'>
        <img className="abbg" src={abbg}/>
        <h1 className='abouthead'>About us...</h1>
        <div className="heart">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={myHeart}
  >
    {/* <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> */}
     <img src={myHeart}/>
     <h5>
      know your heart
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      
      tell us ypur daily habits and we will tell you if you have risk of heart diseases
    </p>
  </Card>
</div>

    <div className="consultation">
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
    >
      {/* <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> */}
      <img src={myDoc}/>
       <h5>
        consultation
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
         book appointments from our best doctors and nutritionalists
      </p>
    </Card>
  </div>

  <div className="exercise">
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
    >
       <img src={myExercise}/> 
             <h5 >
        start your fitness journey
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      get your BMI and suggested exercise routines and diet plans according to your fitness goals.
      </p>
    </Card>
  </div>
  <div className="shop">
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
    >
        <img src={myShop}/>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        shop
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      get everything from yoga mats to protein shakes
      </p>
    </Card>
  </div>
  </div>
  </>   
    );
}
 
export default About;