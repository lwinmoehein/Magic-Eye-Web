import "../styles/VideoViewerStyle.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import Download from "../components/Reusables/Download";
import { setDownloadUrl } from "../actions/index";
function ViewVideo(props) {
  useEffect(() => {
    props.setDownloadUrl(props.video.url);
  }, []);
  return (
    <div className="viewVideoWrapper">
      <Download />
      <div className="player-wrapper">
        <ReactPlayer
          url={props.video.url}
          className="react-player"
          playing
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    video: state.app.selectedVideo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDownloadUrl: (payload) => dispatch(setDownloadUrl(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewVideo);
