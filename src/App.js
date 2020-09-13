import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Home/Dashboard"; 
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/Layout/Landing";
import Register from './components/UserManagement/Register' 
import Login from './components/UserManagement/Login'
//import Home from './components/Home/Home'
import AddDiary  from "./components/diary/AddDiary"
import GetDiary from "./components/diary/GetDiary"
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/register";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            {
              //Public Routes
            }

            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/login" component={Login} />

            {
              //Private Routes
            }
        
            <Switch>
              <SecuredRoute exact path="/dashboard" component={Dashboard} />
              <SecuredRoute exact path="/register" component={Register} />
              <SecuredRoute exact path="/adddary" component={AddDiary} />
              <SecuredRoute exact path="/diaryall" component={GetDiary} />

              
              
            </Switch>

             
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
