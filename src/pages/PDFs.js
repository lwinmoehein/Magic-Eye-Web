import React, { useEffect } from "react";
import { connect } from "react-redux";
import PDF from "../components/Courses/PDF";
import { fetchPDFs } from "../actions/courseActions";

function PDFs(props) {
  useEffect(() => {
    const payload = {
      courseId: props.selectedCourse.id,
      contentId: props.selectedCourseContent.id,
    };
    props.fetchPDFs(payload);
  }, []);
  return (
    <div>
      {props.pdfs ? (
        <div className="videos">
          <div className="videosWrapper">
            {props.pdfs.map((pdf) => {
              return <PDF pdf={pdf}></PDF>;
            })}
          </div>
        </div>
      ) : (
        "no videos found"
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedCourseContent: state.app.selectedCourseContent,
    selectedCourse: state.app.selectedCourse,
    pdfs: state.app.pdfs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPDFs: (payload) => dispatch(fetchPDFs(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PDFs);
