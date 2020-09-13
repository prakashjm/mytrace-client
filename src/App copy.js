import React from 'react';
import './App.css';
import Register from './components/register/Register'
import Login from './components/loginpage/Login'
import Home from './components/home/Home'
import AddDiary from './components/diary/AddDiary'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Layout/Landing";

import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";
 
import { Provider } from "react-redux";
import store from "./store";


const jwtToken = localStorage.jwtToken;


import "bootstrap/dist/css/bootstrap.min.css" 
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Route exact path="/adddiary" component={AddDiary} />

    <Route exact path="/register" component={Register} />
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={Home} />


    </div>
    </Router>
    </Provider>
  );
}

export default App;
