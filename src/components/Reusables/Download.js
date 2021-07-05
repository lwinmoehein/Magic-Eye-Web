import "../../styles/DownloadStyle.css";
import React from "react";
import { connect } from "react-redux";
import GetAppIcon from "@material-ui/icons/GetApp";

function Download(props) {
  return (
    <div className="downloadWrapper">
      <div className="downloadButton">
        <a className="downloadLink" href={props.downloadUrl}>
          Download
        </a>
        <GetAppIcon />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    downloadUrl: state.app.downloadUrl,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Download);
