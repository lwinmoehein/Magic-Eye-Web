import "../styles/ViewPDFStyle.css";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setDownloadUrl, toggleProgress } from "../actions/index";
import axios from "axios";
import NoData from "../components/Reusables/NoData";

function ViewPDF(props) {
  let [downloadablePdfUrl, setDownloadablePdfUrl] = useState("");
  useEffect(() => {
    if (!props.pdf) return;

    props.toggleProgress(true);
    //extract absolute links
    const extractorUrl = "https://www.oursecretworld.site/linkextractor.php";
    let formData = new FormData();
    formData.append("media_link", props.pdf.url);
    axios({
      method: "post",
      url: extractorUrl,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        setDownloadablePdfUrl(response.data.absoluteLink);
        props.toggleProgress(false);
      })
      .catch(function (response) {
        //handle error
        props.toggleProgress(false);
      });
  }, []);

  if (!props.pdf) return <Redirect to="/" />;

  let pdfView = (
    <div
      style={{
        display: !props.isProgressShown ? "block" : "none",
        marginTop: "150px",
        textAlign: "center",
        fontWeight: "bolder",
      }}
    >
      Sorry,something wrong while extracting pdf links !!!
    </div>
  );
  if (downloadablePdfUrl)
    pdfView = (
      <div className="pdfActionsWrapper">
        <a
          href={
            "https://drive.google.com/viewerng/viewer?url=" + downloadablePdfUrl
          }
          target="_blank"
        >
          View PDF
        </a>
        <a href={downloadablePdfUrl}>Download PDF</a>
      </div>
    );

  return <div>{pdfView}</div>;
}

const mapStateToProps = (state) => {
  return {
    pdf: state.app.selectedPDF,
    isProgressShown: state.app.isProgressShown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleProgress: (payload) => dispatch(toggleProgress(payload)),
    setDownloadUrl: (payload) => dispatch(setDownloadUrl(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPDF);
