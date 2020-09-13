 
import React, { Component } from "react";
import DiaryItem from "./DiaryItem";
 import { connect } from "react-redux";
import { getDiaries } from "../../actions/diaryAction";
import PropTypes from "prop-types";

class GetDiary extends Component {
  componentDidMount() {
    this.props.getDiaries();

  }

  render() {
     
    const { diaries } = this.props.diary;
    console.log(">>>");

    console.log(diaries);
    console.log(">>><<");
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">My Diary</h1>
              <br />

              <br />
              <hr />
              {diaries.map(diary => (
                <DiaryItem key={diary.id} diary={diary} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GetDiary.propTypes = {
  diary: PropTypes.object.isRequired,
  getDiaries: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  diary: state.diary
});

export default connect(
  mapStateToProps,
  { getDiaries }
)(GetDiary);
