import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../src/image/Rectangle1.png'
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CoxDetails from './component/CoxDetails/CoxDetails';
import SundarbanDetails from './component/SundarbanDetails/SundarbanDetails';
import SreemangleDetails from './component/SreemangleDetails/SreemangleDetails';
import Login from './component/Login/Login';
import Hotel from './component/Hotel/Hotel';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import ShundarHotel from './component/ShundarHotel/ShundarHotel';
import SrimangleHotel from './component/SrimangleHotel/SrimangleHotel';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name : {loggedInUser.name}</p>
    <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1) ), url(${image})` }} className="header">
      <Router>
        <Switch>
            <Route exact path = '/'>
                <Home></Home>
            </Route>
            <Route  path = 'Home'>
                <Home></Home>
            </Route>
            <Route path = "/Coxs">
                <CoxDetails></CoxDetails>
            </Route>
            <Route path = "/Sundarban">
                <SundarbanDetails></SundarbanDetails>
            </Route>
            <Route path = "/Sreemangle">
              <SreemangleDetails></SreemangleDetails>
            </Route>
            <Route path = "/login">
              <Login></Login>
            </Route>
            <PrivateRoute path = "/Hotel">
              <Hotel></Hotel>
            </PrivateRoute>
            <PrivateRoute path = "/ShundarHotel">
              <ShundarHotel></ShundarHotel>
            </PrivateRoute>
            <PrivateRoute path = "/SrimangleHotel">
              <SrimangleHotel></SrimangleHotel>
            </PrivateRoute>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
   
  );
}

export default App; 
