import React from "react";
import { useHistory } from "react-router-dom";
import { setSelectedPDF } from "../../actions/courseActions";
import { connect } from "react-redux";

function PDF(props) {
  const history = useHistory();

  function onPDFClicked() {
    history.push("/viewPDF");
    props.setSelectedPDF(props.pdf);
  }

  return <div onClick={() => onPDFClicked()}>{props.pdf.name}</div>;
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedPDF: (payload) => dispatch(setSelectedPDF(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PDF);
