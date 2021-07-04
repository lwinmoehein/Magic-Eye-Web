import React from "react";
import "../styles/CourseContentDetailStyle.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function CourseContentDetail(props) {
  return (
    <div className="courseContentWrapper">
      <div>
        <Link to="/videos">Videos</Link>
      </div>
      <div>
        <Link to="/pdfs">PDFs</Link>
      </div>
      <div>
        <Link to="/links">Links</Link>
      </div>
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
