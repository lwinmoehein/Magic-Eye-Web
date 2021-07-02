import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseContents from "./pages/CourseContents";
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
        path="/courseData"
        user={props.user}
        component={CourseContents}
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
