import "../styles/VideoViewerStyle.css";
import React from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

function ViewVideo(props) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={props.video.url}
        className="react-player"
        playing
        width="100%"
        height="100%"
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    video: state.app.selectedVideo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewVideo);
