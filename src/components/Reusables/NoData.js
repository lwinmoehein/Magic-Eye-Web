import "../../styles/NoDataStyle.css";
import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

function NoData() {
  return (
    <div className="NoDataWrapper">
      <div>
        <ErrorOutlineIcon></ErrorOutlineIcon>
        <div>No Data Found!!!</div>
      </div>
    </div>
  );
}

export default NoData;
