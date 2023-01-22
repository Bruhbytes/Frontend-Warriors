import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

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
import Under from './components/Under_S'
import Normal from './components/Normal'
import Overweight from './components/Overweight'
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
            <Route path="bmi" element={user? <BMI /> : <Navigate to="/login" />}></Route>
            <Route 
              path="/appointment" 
              element={user ? <Appointment2 /> : <Navigate to="/login" />} 
            />
             <Route path="/calculate" element={user? <Create /> : <Navigate to="/login" />}></Route>
          <Route path="/underweight" element={user? <Under /> : <Navigate to="/login" />}></Route>
          <Route path="/normal" element={user? <Normal /> : <Navigate to="/login" />}></Route>
          <Route path="/overweight" element={user? <Overweight /> : <Navigate to="/login" />}></Route>

            <Route 
              path="/map" 
              element={user ? <Map/> : <Navigate to="/login" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
