
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import AddRecord from './AddRecord';
import EditRecord from './EditRecord';
import Register from './Register';
import CheckoutProduct from './CheckoutProduct';
import {auth} from './firebase';
import {db} from './firebase';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { GlobalProvider } from './GlobalContext';

function App() {
  const [{}, dispatch] = useStateValue();
  //var loggedUser=null;
  const [loggedUser, setLoggedUser] = useState('');
  
  return (
    <GlobalProvider>
    <div className="app">
      <Router>
      <Switch>
        <Route path="/addRecord">
          <AddRecord />
        </Route>
        <Route path="/checkout">
          <CheckoutProduct />
        </Route>
        <Route path="/editRecord/:productId">
          <EditRecord />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/checkout">
          <Login />
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
           {/* <Login />  */}
        </Route>
      </Switch>
    </Router>
    </div>
    </GlobalProvider>
  );
}
export default App;
