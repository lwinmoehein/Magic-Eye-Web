import "../styles/ViewPDFStyle.css";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import Download from "../components/Reusables/Download";
import { setDownloadUrl, toggleProgress } from "../actions/index";
import axios from "axios";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function ViewPDF(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  let [downloadableVideoUrl, setDownloadableUrl] = useState("");
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
        console.log("url:", response.data.absoluteLink);
        setDownloadableUrl(response.data.absoluteLink);
        props.toggleProgress(false);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        props.toggleProgress(false);
      });
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    props.toggleProgress(false);
    setNumPages(numPages);
  }
  function onLoadError() {
    props.toggleProgress(false);
  }

  function openPDF() {
    window.open(downloadableVideoUrl);
    return false;
  }

  if (!props.pdf) return <Redirect to="/" />;

  let pdfView = <div></div>;
  if (downloadableVideoUrl)
    pdfView = (
      <div className="pdfActionsWrapper">
        <a
          href={
            "https://drive.google.com/viewerng/viewer?url=" +
            downloadableVideoUrl
          }
          target="_blank"
        >
          View PDF
        </a>
        <a href={downloadableVideoUrl}>Download PDF</a>
      </div>
    );

  const PDFDocumentWrapper = styled.div`
    canvas {
      width: 100% !important;
      height: auto !important;
    }
  `;

  return <div>{pdfView}</div>;
}

const mapStateToProps = (state) => {
  return {
    pdf: state.app.selectedPDF,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleProgress: (payload) => dispatch(toggleProgress(payload)),
    setDownloadUrl: (payload) => dispatch(setDownloadUrl(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPDF);
