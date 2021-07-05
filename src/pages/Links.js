import { PinDropSharp } from "@material-ui/icons";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchLinks } from "../actions/courseActions";
import ResourceLink from "../components/Courses/ResourceLink";
import NoData from "../components/Reusables/NoData";

function Links(props) {
  useEffect(() => {
    if (!props.selectedCourseContent || !props.selectedCourse) return;
    const payload = {
      courseId: props.selectedCourse.id,
      contentId: props.selectedCourseContent.id,
    };
    props.fetchLinks(payload);
  }, []);

  if (!props.selectedCourse || !props.selectedCourseContent)
    return <Redirect to="/" />;

  if (props.links.length <= 0) return <NoData />;

  return (
    <div>
      {props.links ? (
        <div className="videos">
          <div className="videosWrapper">
            {props.links.map((link) => {
              return <ResourceLink link={link} />;
            })}
          </div>
        </div>
      ) : (
        "no links found"
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedCourseContent: state.app.selectedCourseContent,
    selectedCourse: state.app.selectedCourse,
    links: state.app.links,
    isProgressShown: state.app.isProgressShown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLinks: (payload) => dispatch(fetchLinks(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Links);
