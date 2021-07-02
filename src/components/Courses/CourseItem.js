import React from "react";
import CourseItemStyle from "../../styles/CourseItemStyle.css";
import { setSelectedCourse } from "../../actions/courseActions";
import { connect } from "react-redux";
import { toggleProgress } from "../../actions";
import { useHistory, useLocation } from "react-router-dom";

function CourseItem(props) {
  const history = useHistory();

  function onCourseSelected() {
    history.push("/courseContent");
    props.setSelectedCourse(props.item);
  }
  return (
    <div className="courseItem" onClick={() => onCourseSelected()}>
      <span>{props.item.name}</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isProgressShown: state.app.isProgressShown,
    selectedCourse: state.app.selectedCourse,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleProgress: (payload) => dispatch(toggleProgress(payload)),
    setSelectedCourse: (payload) => dispatch(setSelectedCourse(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseItem);
