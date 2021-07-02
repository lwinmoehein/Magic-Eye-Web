import React from "react";
import "../styles/CourseContentDetailStyle.css";
import { connect } from "react-redux";

function CourseContentDetail(props) {
  return (
    <div className="courseContentWrapper">
      <div>Videos</div>
      <div>PDFs</div>
      <div>Links</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedCourseContent: state.app.selectedCourseContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseContentDetail);
