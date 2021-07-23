import "../styles/VideoViewerStyle.css";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import Download from "../components/Reusables/Download";
import { setDownloadUrl } from "../actions/index";
import VideoPlayer from "../components/Reusables/VideoPlayer";

function ViewVideo(props) {
  useEffect(() => {});
  if (!props.video) return <Redirect to="/" />;
  let videoId = props.video.url.substring(
    props.video.url.lastIndexOf("d/") + 2,
    props.video.url.lastIndexOf("/view")
  );
  const downloadableVideoUrl = `https://drive.google.com/u/0/uc?id=${videoId}&export=download&confirm=dGGp`;
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    fluid: true,
    aspectRatio: "16:7",
    sources: [
      {
        src: downloadableVideoUrl,
        type: "video/mp4",
      },
    ],
  };

  return (
    <div className="videoViewerWrapper">
      <VideoPlayer className="player" {...videoJsOptions} />
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
