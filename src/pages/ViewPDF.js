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
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function ViewPDF(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (!props.pdf) return;
    props.toggleProgress(true);
    props.setDownloadUrl(props.pdf.url);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    props.toggleProgress(false);
    setNumPages(numPages);
  }
  function onLoadError() {
    props.toggleProgress(false);
  }

  if (!props.pdf) return <Redirect to="/" />;

  const PDFDocumentWrapper = styled.div`
    canvas {
      width: 100% !important;
      height: auto !important;
    }
  `;

  return (
    <div>
      <PDFDocumentWrapper>
        <Document
          file={{
            url: props.pdf.url,
          }}
          loading=""
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onLoadError}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </PDFDocumentWrapper>
    </div>
  );
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
