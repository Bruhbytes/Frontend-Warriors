import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {/* <Route path="/sign">
            <Signup />
          </Route>
          <Route path="/adminlog">
            <BlogDetails />
  </Route> */}
        </Switch>
      </div>
   
  </Router>
  );
}

export default App;
