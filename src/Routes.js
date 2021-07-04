import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Videos from "./pages/Videos";
import Links from "./pages/Links";
import PDFs from "./pages/PDFs";
import Courses from "./pages/Courses";
import CourseContents from "./pages/CourseContents";
import CourseContentDetail from "./pages/CourseContentDetail";
import SignInScreen from "./pages/SignInScreen";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/Reusables/ProtectedRoute";
import { connect } from "react-redux";

function Routes(props) {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <ProtectedRoute
        exact
        path="/courses"
        user={props.user}
        component={Courses}
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
        path="/courseContentDetail"
        user={props.user}
        component={CourseContentDetail}
      ></ProtectedRoute>

      <Route path="/login">
        <SignInScreen />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return { user: state.app.user };
};

export default connect(mapStateToProps)(Routes);
