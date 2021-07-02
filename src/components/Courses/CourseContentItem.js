import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setSelectedCourseContent } from "../../actions/courseActions";

function CourseContentItem(props) {
  const history = useHistory();

  function onCourseContentClicked() {
    props.setSelectedCourseContent(props.item);
    history.push("/courseContentDetail");
  }
  return (
    <div className="courseItem" onClick={() => onCourseContentClicked()}>
      {props.item.name}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isProgressShown: state.app.isProgressShown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCourseContent: (payload) =>
      dispatch(setSelectedCourseContent(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseContentItem);
