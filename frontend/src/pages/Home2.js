import "./Home2.css";

const Home2 = () => {
    return ( 
        <>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>Pulse Fit</title>
  <meta
    name="description"
    content="ROSA is an enchanting Parallax Restaurant WordPress Theme that allows you to tell your story in an enjoyable way, perfect for restaurants or coffee shops."
  />
  <meta
    name="viewport"
    content="width = device-width, initial-scale = 1, shrink-to-fit = no"
  />
  {/* Place favicon.ico in the root directory */}
  <link
    rel="shortcut icon"
    href="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988515/rosa-favicon.png"
  />
  {/*Fonts*/}
  <link
    href="https://fonts.googleapis.com/css?family=Cabin|Herr+Von+Muellerhoff|Source+Sans+Pro"
    rel="stylesheet"
  />
  {/*Fonts*/}
  {/*FontAwesome*/}
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
    integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
    crossOrigin="anonymous"
  />
  {/*FontAwesome*/}
  <link rel="stylesheet" href="css/main.css" />
  <link rel="stylesheet" href="css/main.min.css" />
  {/*[if lte IE 9]>
  <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]*/}
  {/*Start loader*/}
  <div className="loader-wrap">
    <div className="loader">
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
      <span className="loader-item" />
    </div>
  </div>
  {/*End loader*/}
  {/*Start Dots*/}
  <div className="dots">
    <div className="active one" data-x="header" />
    <div className="two" data-x=".recipes" />
    <div className="three" data-x=".fixed-image" />
  </div>
  {/*End Dots*/}
  {/*Start Header*/}
  {/* <header>
    <nav>
      <div className="logo">
        <a href="index.html">
          <img
            src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988515/logo-rosa-white.png"
            alt="Rosa Logo"
          />
        </a>
      </div>
      <div className="toggle">
        <span className="first" />
        <span className="middle" />
        <span className="last" />
      </div>
      <div className="navigation-bar">
        <ul>
          <li className="active">
            <a href="index.html">
              Home
              <span className="underline" />
            </a>
          </li>
          <li>
            <a href="#">
              Reservations
              <span className="underline" />
            </a>
          </li>
          <li>
            <a href="#">
              Menu
              <span className="underline" />
            </a>
          </li>
          <li>
            <a href="#">
              Blog
              <span className="underline" />
            </a>
          </li>
          <li>
            <a href="#">
              Features
              <span className="underline" />
            </a>
          </li>
          <li>
            <a href="#">
              Shop
              <span className="underline" />
            </a>
          </li>
          <li>
            <a href="#">
              Contact
              <span className="underline" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="text">
      <h2>Welcome</h2>
      <h1>THE ROSA</h1>
      <div className="arrow">
        <span className="left" />
        <i className="fas fa-asterisk" />
        <span className="right" />
      </div>
      <span>Ready To Be Opened</span>
      <div className="button">
        <button>Explore</button>
      </div>
    </div>
    <svg
      className="svg-down"
      width={192}
      height={61}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 160.7 61.5"
      enableBackground="new 0 0 160.7 61.5"
      xmlSpace="preserve"
    >
      <path
        fill="currentColor"
        d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
      />
    </svg>
    <div className="arrow-down"></div>
  </header> */}
  {/*End Header*/}
  {/*start About Us*/}
  <div className="about-us">
    <div className="text">
      <h2>Discover</h2>
      <h3>Your Fitness Journey...
      </h3>
      <div>
        <i className="fas fa-asterisk" />
      </div>
      <p>
        Pulse Fit is an all in one website where you can find solutions to all your fitness needs .Right from checking your BMI to getting curated videos just for you to shopping for your fitness needs  to getting Doctors appoinment
      </p>
      <div>
        <a className="a-CTA" href="#">
          About Us
        </a>
      </div>
    </div>
    <div className="image-container">
      <div className="image image1">
        <img
          src="https://i.pinimg.com/originals/50/b5/b8/50b5b814c352d8cdaa716a9ce25966ec.jpg"
          alt="Yoga photo1"
        />
      </div>
      <div className="image image2">
        <img
          src="https://cdn1.blovcdn.com/bloglovin/aHR0cHMlM0ElMkYlMkZzMy5hbWF6b25hd3MuY29tJTJGZmlsZXMuYWN0aXZhdGUuc29jaWFsJTJGdXNlci1pbWFnZS0zMzU2ODIxMy0xNTY2MjI5OTI0LTVkNWFjNWE0MzZkNDc=?checksum=3ed9a2200b86cdf1d3051571fa5e474b9d861d4b&format=j"
          alt="top photo2"
        />
      </div>
    </div>
  </div>
  {/*End About Us*/}
  {/*start Recipes*/}
  <div className="recipes">
    <div className="image" />
    <div className="text">
      <h2>Fitness </h2>
      <h3>Is a way of life</h3>
    </div>
  </div>
  {/*End Recipes*/}
  {/*start Menu*/}
  <div className="menu">
    <div className="box-model">
      <i className="fas fa-times fa-2x close" />
      <div className="arrow">
        <div className="arrow arrow-right" />
        <div className="arrow arrow-left" />
      </div>
      <div className="box-image-container">
        <div className="box-image">
          <img src="" alt="Food Photo" />
        </div>
      </div>
    </div>
    <div className="menu-image-container">
      <div className="image active">
        <img
          src="https://th.bing.com/th/id/OIP.dJMUsAoBszTfwMSBs7qyjAHaE8?pid=ImgDet&rs=1"
          alt="middle Photo"
        />
      </div>
      <div className="image">
        <img
          src="https://www.lifebutlerinternational.com/wp-content/uploads/2020/02/04A5719.-1000x1000jpg.jpg"
          alt="middle Photo"
        />
      </div>
      <div className="image">
        <img
          src="https://th.bing.com/th/id/R.4f755e3050c1d78934c3fae4fe6081a6?rik=F4e3bZt3KxszaA&riu=http%3a%2f%2fmodelsfashionpk.com%2fmfp-images%2fmfp-gallery-images%2fNargis-Fakhri-Model-Actress-276-4278.jpg&ehk=PRthmDwJRNhdFcEqmQ7XGW5m7VcX4RfJaH1u1GBHhOQ%3d&risl=&pid=ImgRaw&r=0"
          alt="middle Photo"
        />
      </div>
      <div className="image">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71usvnAn6lL.jpg"
          alt="middle Photo"
        />
      </div>
    </div>
    <div className="text">
      <h2>Pulse Fit</h2>
      <h3>More about us</h3>
      <div>
        <i className="fas fa-asterisk" />
      </div>
      <p>
       Are you looking for a perfect guide? to start your fitness journey ?who are you waiting for we are pulse fit are here to help you out
      </p>
      <div>
        <a className="a-CTA" href="#">
          Go to home 
        </a>
      </div>
    </div>
  </div>
  {/*End Menu*/}
  {/*Start fixed-image*/}
  <div className="fixed-image">
    <div className="text">
      <h2>Your Body is a Temple</h2>
      <h3>Fitness is a choice</h3>
    </div>
  </div>
  {/*End fixed-image*/}
  {/*start About Us*/}
  <div className="reservation">
    <div className="text">
      <h2>Motivate</h2>
      <h3>Believe you can and you are halfway there...</h3>
      <div>
        <i className="fas fa-asterisk" />
      </div>
      <p>
        We promise a relaxed experience that offers
        something different to local and foreign patrons and ensures you enjoy a
        memorable experience every time.
      </p>
      <div>
        <a className="a-CTA" href="#">
          Register now
        </a>
      </div>
    </div>
    <div className="image-container">
      <div className="image image1">
        <img
          src="https://i.pinimg.com/originals/4d/90/0d/4d900da84034600a326493c18476a999.png"
          alt="Food Photo"
        />
      </div>
      <div className="image image2">
        <img
          src="https://thevoiceslu.com/wp-content/uploads/2016/08/cross-fit.jpg"
          alt="Food Photo"
        />
      </div>
    </div>
  </div>
  {/*End About Us*/}
  {/*Start Footer*/}
  <footer>
    <div className="text">
      <h2>ABOUT PULSE FIT</h2>
      <div>
        <i className="fas fa-asterisk" />
      </div>
      <p>
      tell us ypur daily habits and we will tell you if you have risk of heart diseases
      book appointments from our best doctors and nutritionalists,start your fitness journey,
      get your BMI and suggested exercise routines and diet plans according to your fitness goals.,
      also shop for your fitness needs
      </p>
    </div>
    <div className="contact-container">
      <div className="social-media">
        <h3>Follow Along</h3>
        <div className="links">
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-facebook-square" />
          </a>
          <a href="#">
            <i className="fab fa-pinterest" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div className="newsletter">
        <h3>NewsLetter</h3>
        <form method="post">
          <input type="email" name="email" placeholder="Type Your Email" />
          <i className="fas fa-envelope" />
        </form>
      </div>
    </div>
  </footer>
  {/*End Footer*/}
  {/*Start Copy-Right*/}
  <div className="copyright">
    <svg
      className="svg-up"
      width={192}
      height={61}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 160.7 61.5"
      enableBackground="new 0 0 160.7 61.5"
      xmlSpace="preserve"
    >
      <path
        fill="#262526"
        d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
      />
    </svg>
    <i className="fas fa-angle-double-up arrow-up" />
    <ul className="info">
      <li>© PULSE FIT  2023</li>
      <li>VJTI,Matunga</li>
      <li>Tel: 123456789</li>
      <li>
        Handcrafted with love by <a href="#">INHERIT_WARRIORS</a> Team
      </li>
    </ul>
    <ul className="CTA">
      <li>
        <a href="#">PERMISSIONS AND COPYRIGHT</a>
      </li>
      <li>
        <a href="#">CONTACT THE TEAM</a>
      </li>
    </ul>
  </div>
  {/*End Copy-Right*/}
  {/* Add your site or application content here */}
</>

     );
}
 
export default Home2;