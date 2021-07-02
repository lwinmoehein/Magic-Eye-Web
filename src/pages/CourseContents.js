import { React } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import CourseContentItem from "../components/Courses/CourseContentItem";
import { fetchCourseContents } from "../actions/courseActions";

function CourseContents(props) {
  const history = useHistory();

  useEffect(() => {
    props.fetchCourseContents(props.selectedCourse.id);
  }, []);

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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseContents: (payload) => dispatch(fetchCourseContents(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseContents);
