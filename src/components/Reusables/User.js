import { PowerOffSharp } from "@material-ui/icons";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserInfo } from "../../actions/courseActions";

function User(props) {
  useEffect(() => {
    if (!props.user || !props.userInfo) return;
    props.fetchUserInfo();
  }, []);
  if (!props.user || !props.userInfo) return <div>Not Logged In</div>;

  return <span>{props.userInfo.name}</span>;
}
const mapStateToProps = (state) => {
  return {
    user: state.app.user,
    userInfo: state.app.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: () => dispatch(fetchUserInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
