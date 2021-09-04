import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PDF from "../components/Courses/PDF";
import { fetchPDFs } from "../actions/courseActions";
import NoData from "../components/Reusables/NoData";

function PDFs(props) {
  useEffect(() => {
    if (!props.selectedCourseContent || !props.selectedCourse) return;
    const payload = {
      courseId: props.selectedCourse.id,
      contentId: props.selectedCourseContent.id,
    };
    props.fetchPDFs(payload);
  }, []);

  if (!props.selectedCourse || !props.selectedCourseContent)
    return <Redirect to="/" />;

  if (props.pdfs.length <= 0 && !props.isProgressShown) return <NoData />;

  return (
    <div>
      {props.pdfs ? (
        <div className="videos">
          <div className="videosWrapper">
            {props.pdfs.map((pdf) => {
              return <PDF key={pdf.id} pdf={pdf}></PDF>;
            })}
          </div>
        </div>
      ) : (
        "no pdfs found"
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedCourseContent: state.app.selectedCourseContent,
    selectedCourse: state.app.selectedCourse,
    pdfs: state.app.pdfs,
    isProgressShown: state.app.isProgressShown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPDFs: (payload) => dispatch(fetchPDFs(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PDFs);
