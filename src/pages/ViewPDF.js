import "../styles/ViewPDFStyle.css";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import Download from "../components/Reusables/Download";
import { setDownloadUrl } from "../actions/index";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function ViewPDF(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    props.setDownloadUrl(props.pdf.url);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const PDFDocumentWrapper = styled.div`
    canvas {
      width: 100% !important;
      height: auto !important;
    }
  `;

  return (
    <div>
      <Download />
      <PDFDocumentWrapper>
        <Document
          file={{
            url: props.pdf.url,
          }}
          onLoadSuccess={onDocumentLoadSuccess}
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
    setDownloadUrl: (payload) => dispatch(setDownloadUrl(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPDF);
