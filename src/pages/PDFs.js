import React from "react";
import { connect } from "react-redux";

function PDFs() {
  return <div>this is pdfs</div>;
}

const mapStateToProps = (state) => {
  return {
    selectedCourseContent: state.app.selectedCourseContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PDFs);
