import "../../styles/YouTubePlayerStyle.css";
import React from "react";
import PropTypes from "prop-types";

function YouTubePlayer(props) {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${props.playableUrl.embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

YouTubePlayer.propTypes = {
  playableUrl: PropTypes.object.isRequired,
};

export default YouTubePlayer;
