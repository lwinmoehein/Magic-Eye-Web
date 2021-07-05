import React from "react";
import "../styles/CourseContentDetailStyle.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

function CourseContentDetail(props) {
  if (!props.selectedCourseContent) return <Redirect to="/" />;
  return (
    <div className="courseContentWrapper">
      <Link className="contentType" to="/videos">
        Videos
      </Link>

      <Link className="contentType" to="/pdfs">
        PDFs
      </Link>

      <Link className="contentType" to="/links">
        Links
      </Link>
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
