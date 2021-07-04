import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { setSelectedVideo } from "../../actions/courseActions";

function Video(props) {
  const history = useHistory();

  function onVideoClicked() {
    history.push("/viewVideo");
    props.setSelectedVideo(props.video);
  }
  return <div onClick={() => onVideoClicked()}>{props.video.name}</div>;
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedVideo: (payload) => dispatch(setSelectedVideo(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Video);
