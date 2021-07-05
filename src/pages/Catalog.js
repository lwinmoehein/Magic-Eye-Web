import React from "react";
import CourseItem from "../components/Courses/CourseItem";
import "../styles/CoursesStyle.css";
import FirebaseConfig from "../config/FirebaseConfig";
import { firebase } from "@firebase/app";
import "@firebase/firestore";
import { useEffect } from "react";
import { connect } from "react-redux";
import { toggleProgress } from "../actions";
import { fetchCatalogs } from "../actions/courseActions";
import NoData from "../components/Reusables/NoData";

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

let db = firebase.firestore();

function Catalog(props) {
  useEffect(() => {
    props.fetchCatalogs();
  }, []);
  if (props.catalogs.length <= 0 && !props.isProgressShown) return <NoData />;
  return (
    <div className="courses">
      <div className="coursesWrapper">
        {props.catalogs.map((catalog) => {
          return <div className="courseItem">{catalog.name}</div>;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isProgressShown: state.app.isProgressShown,
    catalogs: state.app.catalogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleProgress: (payload) => dispatch(toggleProgress(payload)),
    fetchCatalogs: () => dispatch(fetchCatalogs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
