import "../styles/AboutStyle.css";
import { React, useEffect } from "react";
import { connect } from "react-redux";
import { toggleProgress } from "../actions";
import User from "../components/Reusables/User";

function About(props) {
  return (
    <div className="About">
      <h3>Magic Eye Computer Group (Pakokku)</h3>
      <div>
        {" "}
        Student Name : <User />
      </div>
      <div>
        Phone No : <span>{props.user.phoneNumber}</span>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { user: state.app.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleProgress: (payload) => dispatch(toggleProgress(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
