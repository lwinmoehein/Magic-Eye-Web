import "../styles/VideoViewerStyle.css";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toggleProgress } from "../actions/index";
import axios from "axios";
import YouTubePlayer from "../components/Reusables/YouTubePlayer";
import VideoPlayer from "../components/Reusables/VideoPlayer";

async function getMedialUrl(url) {
  const extractorUrl =
    "https://www.magiceyelearningcenter.com/linkextractor.php";
  let formData = new FormData();
  formData.append("media_link", url);
  return axios({
    method: "post",
    url: extractorUrl,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
}

function ViewVideo(props) {
  let [playableUrl, setPlayableUrl] = useState({});
  let [mediaFirePlayerOptions, setMediaFirePlayerOptions] = useState({});

  useEffect(() => {
    //youtube
    if (!props.video.url.includes("mediafire.com")) {
      setPlayableUrl({
        type: "YOUTUBE",
        embedId: props.video.url.split(".be/")[1],
      });
    } else {
      const mediaFireUrl = getMedialUrl(
        "https://www.mediafire.com/file/0xh3v78yzgbgtb0/The_Wanted_-_We_Own_The_Night_%2528Official_Video%2529.mp4/file"
      )
        .then(function (response) {
          //handle success
          const mediaFireUrl = response.data.absoluteLink;
          if (mediaFireUrl) {
            setPlayableUrl({
              type: "MEDIA_FIRE",
              downloadableUrl: mediaFireUrl,
            });
            console.log("playable", playableUrl);

            const videoJsOptions = {
              autoplay: true,
              controls: true,
              fluid: true,
              aspectRatio: "16:7",
              sources: [
                {
                  src: playableUrl.downloadableUrl,
                  type: "video/mp4",
                },
              ],
            };
            setMediaFirePlayerOptions(videoJsOptions);
            console.log("md options", mediaFirePlayerOptions);
          }
        })
        .catch(function (response) {
          return false;
        });
    }
  }, []);

  if (!props.video) return <Redirect to="/" />;

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

  if ((playableUrl.type = "YOUTUBE") && playableUrl.embedId)
    videoView = <YouTubePlayer playableUrl={playableUrl} />;

  if ((playableUrl.type = "MEDIA_FIRE") && playableUrl.downloadableUrl)
    videoView = <VideoPlayer className="player" {...mediaFirePlayerOptions} />;

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

// *** media fire player *** //
// let [downloadableVideoUrl, setDownloadableVideoUrl] = useState("");
// useEffect(() => {
//   props.toggleProgress(true);
//   //extract absolute links
//   const extractorUrl = "https://www.oursecretworld.site/linkextractor.php";
//   let formData = new FormData();
//   formData.append("media_link", props.video.url);
//   axios({
//     method: "post",
//     url: extractorUrl,
//     data: formData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       //handle success
//       console.log("url:", response.data.absoluteLink);
//       setDownloadableVideoUrl(response.data.absoluteLink);
//       props.toggleProgress(false);
//     })
//     .catch(function (response) {
//       //handle error
//       console.log(response);
//       props.toggleProgress(false);
//     });
// }, []);
// const videoJsOptions = {
//   autoplay: false,
//   controls: true,
//   fluid: true,
//   aspectRatio: "16:7",
//   sources: [
//     {
//       src: downloadableVideoUrl,
//       type: "video/mp4",
//     },
//   ],
// };
