import React from "react";
import { Link } from "react-router-dom";

function ResourceLink(props) {
  return (
    <div>
      <Link
        to={{
          pathname: "https://" + props.link.link,
        }}
        target="_blank"
      >
        {props.link.link}
      </Link>
    </div>
  );
}

export default ResourceLink;
