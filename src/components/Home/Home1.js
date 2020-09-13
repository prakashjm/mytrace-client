import React, { Component } from "./node_modules/react";
import PropTypes from "./node_modules/prop-types";
import { connect } from "./node_modules/react-redux";
import classnames from "./node_modules/classnames";
import { Link } from "./node_modules/react-router-dom";
  
class Home extends Component { 
 
  

  render() {
     
    return (


         <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="#">My DiaryD</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Diary123</a>






         
            </li>
            
          </ul>
        </div>  
      </nav>



    




 
 
       


 
    );
  }
}

 

export default  Home;