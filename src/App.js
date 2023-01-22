import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';
import EcomHome from './pages/EcomHome';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
    <Router>
    <Switch>

           {/* <Route
              path="/"
              element={ <EcomHome/>} 
              
            /> */}

            
        <Route exact path="/">
          <EcomHome />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        {/* <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> */}
      </Switch>
    </Router>

    </div>
  );
}

export default App;
