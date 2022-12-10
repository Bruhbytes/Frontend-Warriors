import './App.css';
//import Login from './Login';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from './Shop';

function App() {
  return (
    <>
    <div className="app content">
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/> 
            </Route>
            <Route path="/about">
              <About/> 
            </Route>
            <Route exact path="/Shop">
              <Shop/> 
            </Route>
          </Switch>
        </Router>
       
       </div>
       
      </div>
   
  </>
  );
}

export default App;