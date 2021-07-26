import "../styles/VideoViewerStyle.css";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toggleProgress } from "../actions/index";
import VideoPlayer from "../components/Reusables/VideoPlayer";
import axios from "axios";
import NoData from "../components/Reusables/NoData";

function ViewVideo(props) {
  let [downloadableVideoUrl, setDownloadableVideoUrl] = useState("");
  useEffect(() => {
    props.toggleProgress(true);
    //extract absolute links
    const extractorUrl = "https://www.oursecretworld.site/linkextractor.php";
    let formData = new FormData();
    formData.append("media_link", props.video.url);
    axios({
      method: "post",
      url: extractorUrl,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log("url:", response.data.absoluteLink);
        setDownloadableVideoUrl(response.data.absoluteLink);
        props.toggleProgress(false);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        props.toggleProgress(false);
      });
  }, []);

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
  let videoView = (
    <div
      style={{
        display: !props.isProgressShown ? "block" : "none",
        marginTop: "150px",
        textAlign: "center",
        fontWeight: "bolder",
      }}
    >
      Sorry,something wrong while extracting Video links !!!
    </div>
  );
  if (downloadableVideoUrl)
    videoView = <VideoPlayer className="player" {...videoJsOptions} />;

  return <div className="videoViewerWrapper">{videoView}</div>;
}

const mapStateToProps = (state) => {
  return {
    video: state.app.selectedVideo,
    isProgressShown: state.app.isProgressShown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleProgress: (payload) => dispatch(toggleProgress(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewVideo);
