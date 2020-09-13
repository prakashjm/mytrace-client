import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from "../../actions/securityActions";
import { Link } from "react-router-dom";

import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      firstName: "",
      middleName: "",
      lastName: "",
      mobile: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      console.log(nextProps.errors);
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
     const newUser = {
      email: this.state.email,
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      password: this.state.password,
      mobile: this.state.mobile

    };
    this.props.createUser(newUser, this.props.history);
    console.log(newUser)

  }
  
  render() {
    const { errors } = this.state;

    return (
      <body> 
 
      <div className="limiter">
      <div className="container-login100">
      <div className="wrap-login100 p-b-20">
      <form className="login100-form validate-form" onSubmit={this.onSubmit}>                  

<span className="login100-form-title p-b-70">
Join My Diary
</span> 
 

<div className="wrap-input100 validate-input   m-b-35" data-validate="Enter Email" >
<input className="input100" type="text" name="email" placeholder="Enter Email" value={this.state.email}
onChange={this.onChange}/>

{(() => {
  if (errors.email) {
    return (
      <div class="alert alert-danger">
       {errors.email}
    </div>
    )
  } 
})()}


</div>
 






<div className="wrap-input100 validate-input   m-b-15" data-validate="Enter password" >
<input className="input100" type="password" name="password" placeholder="Enter Password" value={this.state.password}
onChange={this.onChange}/>

{(() => {
  if (errors.password) {
    return (
      <div class="alert alert-danger">
       {errors.password}
    </div>
    )
  } 
})()}



 </div>

<div className="wrap-input100 validate-input   m-b-50" data-validate="Enter first Name">
<input className="input100" type="text" name="firstName" placeholder="Enter First Name" value={this.state.firstName}
onChange={this.onChange}/>


{(() => {
  if (errors.firstName) {
    return (
      <div class="alert alert-danger">
       {errors.firstName}
    </div>
    )
  } 
})()}
</div>

<div className="wrap-input100 validate-input  m-b-50" data-validate="Enter Middle Name">
<input className="input100" type="text" name="middleName" placeholder="Enter Middle Name" value={this.state.middleName}
onChange={this.onChange}/>


{(() => {
  if (errors.middleName) {
    return (
      <div class="alert alert-danger">
       {errors.middleName}
    </div>
    )
  } 
})()}

</div>


<div className="wrap-input100 validate-input  m-b-35" data-validate="Enter Last Name">
<input className="input100" type="text" name="lastName" placeholder="Enter Last Name" value={this.state.lastName}
onChange={this.onChange}/>


{(() => {
  if (errors.lastName) {
    return (
      <div class="alert alert-danger">
       {errors.lastName}
    </div>
    )
  } 
})()}


</div> 

<div className="wrap-input100 validate-input  m-b-35" data-validate="Enter Mobile">
<input className="input100" type="text" name="mobile"  placeholder="Enter Mobile Number" value={this.state.mobile}
onChange={this.onChange}/>


{(() => {
  if (errors.mobile) {
    return (
      <div class="alert alert-danger">
       {errors.mobile}
    </div>
    )
  } 
})()}



 </div>

 <div className="m-b-35" >


{(() => {
  if (errors.OBJERROR) {
    return (
      <div class="alert alert-danger">
       {errors.OBJERROR}
    </div>
    )
  } 
})()}


</div>


 <div className="container-login100-form-btn">
<button className="login100-form-btn">
Signup
</button>
</div>
 


</form>
<div className="m-b-35">

<span className="txt1">
      Have an account?   
      </span>
      <Link to={`/`}>
          Sign in
      </Link>
     </div> 
      </div></div></div>


  
      



     </body>
    );
  }
}

Register.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createUser }
)(Register);
