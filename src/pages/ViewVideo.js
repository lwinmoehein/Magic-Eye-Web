import "../styles/VideoViewerStyle.css";
import React from "react";
import { connect } from "react-redux";
import { Media, Player, controls } from "react-media-player";
const { PlayPause, MuteUnmute } = controls;

function ViewVideo(props) {
  return (
    <div className="videoViewerWrapper">
      <Media>
        <div className="media">
          <div className="media-player">
            <Player className="player" src={props.video.url} />
          </div>
        </div>
        <div className="media-controls">
          <PlayPause />
          <MuteUnmute />
        </div>
      </Media>
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
