import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
 
import { login } from "../../actions/securityActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    }; 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.security.validToken) {
      this.props.history.push("/home");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const LoginRequest = {
      userName: this.state.email,
      password: this.state.password
    };

    this.props.login(LoginRequest);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (


      <div className="limiter">
      <div className="container-login100">
      <div className="wrap-login100 p-t-85 p-b-20">
      <form className="login100-form validate-form" onSubmit={this.onSubmit}>
<span className="login100-form-title p-b-70">
Welcome
</span>
<span className="login100-form-avatar">
<img src="https://colorlib.com/etc/lf/Login_v6/images/avatar-01.jpg" alt="AVATAR"/>
</span>

<div className="wrap-input100 validate-input m-t-85 m-b-35" >
<input className="input100" type="email" name="email" value={this.state.email}
onChange={this.onChange} placeholder="Enter Email" required/>
   
 

</div>


<div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
<input className="input100" type="password" name="password"  value={this.state.password}
onChange={this.onChange} placeholder="Enter Password" required/>
<span className="focus-input100" ></span>
</div>



{(() => {
  if (errors.error) {
    return (
      <div class="alert alert-danger">
       {errors.error}
    </div>
    )
  } 
})()}

 <div className="container-login100-form-btn">
<button className="login100-form-btn">
Login
</button>
</div>

<ul className="login-more p-t-40">
<li className="m-b-8">
<span className="txt1">
Forgot
</span>
<a href="#" className="txt2">
Username / Password?
</a>
</li>
<li>
<span className="txt1">
Don’t have an account?   
</span>
<Link to={`/signup/`}>
    Sign up
</Link>
</li>
</ul>





</form>




      </div></div></div>
      
       


 
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
