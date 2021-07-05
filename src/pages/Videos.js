import "../styles/VideosStyle.css";
import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchVideos, setSelectedVideo } from "../actions/courseActions";
import Video from "../components/Courses/Video";

function Videos(props) {
  useEffect(() => {
    const payload = {
      courseId: props.selectedCourse.id,
      contentId: props.selectedCourseContent.id,
    };
    props.fetchVideos(payload);
  }, []);

  return (
    <div>
      {props.videos ? (
        <div className="videos">
          <div className="videosWrapper">
            {props.videos.map((video) => {
              return <Video video={video}></Video>;
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVideos: (payload) => dispatch(fetchVideos(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
