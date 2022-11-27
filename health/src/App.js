import './App.css';
import Login from './Login';
import Reg from './Reg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Community from './Community';
import React, { useContext, useState } from 'react';
import Map from './Map';

const UserContext = React.createContext();

function App() {
  const [username, setUsername] = useState('');
  return (
    <UserContext.Provider value={{username, setUsername}} >
    <Router>
    
      <div className="content">
        <Switch> 
          <Route exact path="/">
            {/* <Login UserContext={UserContext} /> */}
            <Map/>
          </Route>
           <Route exact path="/Reg">
            <Reg/>
           </Route>
           <Route path="/Community">
            <Community UserContext={UserContext} />
           </Route>
            
          {/*<Route path="/adminlog">
            <BlogDetails />
  </Route> */}
        </Switch>
      </div>
   
  </Router>
  </UserContext.Provider>
  );
}

export default App;
