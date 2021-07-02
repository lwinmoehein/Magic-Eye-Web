import { React } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";

function CourseContents(props) {
  const history = useHistory();

  return (
    <div>{props.selectedCourse ? props.selectedCourse.name : "no data"}</div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedCourse: state.app.selectedCourse,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseContents);
