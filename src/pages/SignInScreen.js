// Import FirebaseAuth and firebase.
import React, { useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "@firebase/app";
import "@firebase/auth";
import FirebaseConfig from "../config/FirebaseConfig";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { storeUser, toggleProgress } from "../actions";

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      defaultCountry: "MM",
      loginHint: "09440883322",
    },
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen(props) {
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          props.storeUser(user);
        }
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!props.user) {
    return (
      <div>
        <h1> My App </h1> <p> Please sign - in: </p>{" "}
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />{" "}
      </div>
    );
  }
  return <Redirect to="/courses" />;
}

const mapStateToProps = (state) => {
  return { isProgressShown: state.app.isProgressShown,user:state.app.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleProgress: (payload) => dispatch(toggleProgress(payload)),
    storeUser: (payload) => dispatch(storeUser(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
