import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Create from './components/Create';
import Under from './components/Under_S';
import Home from './Home';
import Normal from './components/Normal';
import Overweight from './components/Overweight';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/calculate" element={<Create />}></Route>
          <Route path="/underweight" element={<Under />}></Route>
          <Route path="/normal" element={<Normal />}></Route>
          <Route path="/overweight" element={<Overweight />}></Route>

        </Routes>
      </div>
    </Router >
  );
}

export default App;
