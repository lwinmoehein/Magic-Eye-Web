import { React } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import CourseContentItem from "../components/Courses/CourseContentItem";
import { fetchCourseContents } from "../actions/courseActions";
import NoData from "../components/Reusables/NoData";

function CourseContents(props) {
  const history = useHistory();

  useEffect(() => {
    if (props.selectedCourse)
      props.fetchCourseContents(props.selectedCourse.id);
  }, []);

  if (!props.selectedCourse) return <Redirect to="/" />;

  if (props.courseContents.length <= 0 && !props.isProgressShown)
    return <NoData />;

  return (
    <div>
      {props.selectedCourse ? (
        <div className="courses">
          <div className="coursesWrapper">
            {props.courseContents.map((courseContent) => {
              return (
                <CourseContentItem
                  key={courseContent.id}
                  item={courseContent}
                />
              );
            })}
          </div>
        </div>
      ) : (
        "no data"
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedCourse: state.app.selectedCourse,
    courseContents: state.app.courseContents,
    isProgressShown: state.app.isProgressShown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseContents: (payload) => dispatch(fetchCourseContents(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseContents);
