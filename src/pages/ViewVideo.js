import "../styles/VideoViewerStyle.css";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import Download from "../components/Reusables/Download";
import { setDownloadUrl } from "../actions/index";
import VideoPlayer from "../components/Reusables/VideoPlayer";
import axios from "axios";

function ViewVideo(props) {
  let downloadableVideoUrl = "";
  useEffect(() => {
    //extract absolute links
    const extractorUrl = "http://www.oursecretworld.site/linkextractor.php";
    fetch(extractorUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { media_link: props.video.url },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        throw err;
      });
  });

  if (!props.video) return <Redirect to="/" />;

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
