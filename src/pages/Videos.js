import React from "react";
import { connect } from "react-redux";

function Videos() {
  return <div>this is videos</div>;
}

const mapStateToProps = (state) => {
  return {
    selectedCourseContent: state.app.selectedCourseContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
