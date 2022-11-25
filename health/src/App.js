import './App.css';
import Login from './Login';
import Reg from './Reg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    
      <div className="content">
        <Switch> 
          <Route exact path="/">
            <Login />
          </Route>
           <Route exact path="/Reg">
            <Reg/>
           </Route>
          {/*<Route path="/adminlog">
            <BlogDetails />
  </Route> */}
        </Switch>
      </div>
   
  </Router>
  );
}

export default App;
