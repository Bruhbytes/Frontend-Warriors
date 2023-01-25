import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import './App.css';
// pages & components
import Home from './pages/Home'
import Login2 from './pages/Login2'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Signup2 from './pages/Signup2'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Appointment from './pages/Appointment'
import Appointment2 from './pages/Appointment2'
import Map from './pages/Map'
import BMI from './pages/BMI'
import Create from './components/Create'
import Create2 from './components/Create2'
import Under from './components/Under_S'
import Normal from './components/Normal'
import Overweight from './components/Overweight'
import Home2 from './pages/Home2'
import Contact from './pages/Contact'
import About from './pages/About'
import EcomHome from './pages/EcomHome';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import PredictForm from './components/PredictForm';

// import './App.css';

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar2 />
        <div className="pages">
          <Routes>
            <Route
              exact path="/"
              element={user ? <Home2 /> : <Navigate to="/login" />}
            />
            <Route
              exact path="/shop"
              element={user ? <EcomHome /> : <Navigate to="/login" />}
            />
            <Route
              exact path="/products/:category"
              element={user ? <ProductList /> : <Navigate to="/login" />}
            />
            <Route
              exact path="/product/:id"
              element={user ? <Product /> : <Navigate to="/login" />}
            />
            <Route
              exact path="/cart"
              element={user ? <Cart /> : <Navigate to="/login" />}
            />
            <Route
              path="/about"
              element={user ? <About /> : <Navigate to="/login" />}
            />
            <Route
              path="/contact"
              element={user ? <Contact /> : <Navigate to="/login" />}
            />
            <Route
              path="/community"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login2 /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup2 /> : <Navigate to="/" />}
            />
            <Route path="bmi" element={user ? <BMI /> : <Navigate to="/login" />}></Route>
            <Route
              path="/appointment"
              element={user ? <Appointment2 /> : <Navigate to="/login" />}
            />
            <Route path="/calculate" element={user ? <Create2 /> : <Navigate to="/login" />}></Route>
            <Route path="/underweight" element={user ? <Under /> : <Navigate to="/login" />}></Route>
            <Route path="/normal" element={user ? <Normal /> : <Navigate to="/login" />}></Route>
            <Route path="/overweight" element={user ? <Overweight /> : <Navigate to="/login" />}></Route>
            <Route path="/prediction" element={<PredictForm />}></Route>

            <Route
              path="/map"
              element={user ? <Map /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
