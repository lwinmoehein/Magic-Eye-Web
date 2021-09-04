import "../styles/VideosStyle.css";
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchVideos, setSelectedVideo } from "../actions/courseActions";
import Video from "../components/Courses/Video";
import NoData from "../components/Reusables/NoData";

function Videos(props) {
  useEffect(() => {
    if (!props.selectedCourseContent || !props.selectedCourse) return;

    const payload = {
      courseId: props.selectedCourse.id,
      contentId: props.selectedCourseContent.id,
    };
    props.fetchVideos(payload);
  }, []);

  if (!props.selectedCourse || !props.selectedCourseContent)
    return <Redirect to="/" />;

  if (props.videos.length <= 0 && !props.isProgressShown) return <NoData />;

  return (
    <div>
      {props.videos ? (
        <div className="videos">
          <div className="videosWrapper">
            {props.videos.map((video) => {
              return <Video key={video.id} video={video}></Video>;
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
    videos: state.app.videos,
    isProgressShown: state.app.isProgressShown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVideos: (payload) => dispatch(fetchVideos(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
