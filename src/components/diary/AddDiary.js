import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createUser } from "../../actions/securityActions";
import { Link } from "react-router-dom";
import { createDiaryContent } from "../../actions/diaryAction";

import classnames from "classnames";

class AddDiary extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      subject: "",
      diaryDate: "",
      content: "",
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
    console.log("-------")
    const newDiaryContent = {
        id: this.state.id,
        subject: this.state.subject,
        diaryDate: this.state.diaryDate,
        content: this.state.content

    };
    this.props.createDiaryContent(newDiaryContent, this.props.history);
    console.log(newDiaryContent)

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
What's Up Bro
</span> 
 

<div>
<input className="input100" type="text" name="id" placeholder="Enter id" value={this.state.id}
onChange={this.onChange} hidden/>




</div>
 






<div className="wrap-input100 validate-input   m-b-15" data-validate="Enter password" >
<input className="input100" type="text" name="subject" placeholder="Enter Password" value={this.state.subject}
onChange={this.onChange}/>
 </div>

<div className="wrap-input100 validate-input   m-b-50" data-validate="Enter first Name">
<input className="input100" type="text" name="diaryDate" placeholder="Enter First Name" value={this.state.diaryDate}
onChange={this.onChange}/>
</div>

<div className="wrap-input100 validate-input  m-b-50" data-validate="Enter Middle Name">
<input className="input100" type="text" name="content" placeholder="Enter Middle Name" value={this.state.content}
onChange={this.onChange}/>
</div>

 

 <div className="container-login100-form-btn">
<button className="login100-form-btn">
Save
</button>
</div>
 


</form>

 
      </div></div></div>


  
      



     </body>
    );
  }
}

AddDiary.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createDiaryContent }
)(AddDiary);
