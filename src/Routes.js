import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Videos from "./pages/Videos";
import Links from "./pages/Links";
import PDFs from "./pages/PDFs";
import ViewVideo from "./pages/ViewVideo";
import ViewPDF from "./pages/ViewPDF";
import ViewLink from "./pages/ViewLink";
import Courses from "./pages/Courses";
import Catalog from "./pages/Catalog";
import CourseContents from "./pages/CourseContents";
import CourseContentDetail from "./pages/CourseContentDetail";
import SignInScreen from "./pages/SignInScreen";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/Reusables/ProtectedRoute";
import { connect } from "react-redux";

function Routes(props) {
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/about"
        user={props.user}
        component={About}
      ></ProtectedRoute>
      <ProtectedRoute
        exact
        path="/courses"
        user={props.user}
        component={Courses}
      ></ProtectedRoute>
      <ProtectedRoute
        exact
        path="/catalogs"
        user={props.user}
        component={Catalog}
      ></ProtectedRoute>
      <ProtectedRoute
        exact
        path="/courseContent"
        user={props.user}
        component={CourseContents}
      ></ProtectedRoute>
      <ProtectedRoute
        exact
        path="/videos"
        user={props.user}
        component={Videos}
      ></ProtectedRoute>
      <ProtectedRoute
        exact
        path="/pdfs"
        user={props.user}
        component={PDFs}
      ></ProtectedRoute>
      <ProtectedRoute
        exact
        path="/links"
        user={props.user}
        component={Links}
      ></ProtectedRoute>
      <ProtectedRoute
        exact
        path="/viewVideo"
        user={props.user}
        component={ViewVideo}
      ></ProtectedRoute>
      <ProtectedRoute
        exact
        path="/viewPDF"
        user={props.user}
        component={ViewPDF}
      ></ProtectedRoute>
      <ProtectedRoute
        exact
        path="/viewLink"
        user={props.user}
        component={ViewLink}
      ></ProtectedRoute>
      <ProtectedRoute
        exact
        path="/courseContentDetail"
        user={props.user}
        component={CourseContentDetail}
      ></ProtectedRoute>

      <Route path="/login">
        <SignInScreen />
      </Route>
      <ProtectedRoute
        exact
        path="/"
        user={props.user}
        component={Courses}
      ></ProtectedRoute>
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return { user: state.app.user };
};

export default connect(mapStateToProps)(Routes);
