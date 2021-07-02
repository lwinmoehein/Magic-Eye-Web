import {
  FETCH_COURSES_BEGIN,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  FETCH_COURSE_CONTENTS_BEGIN,
  FETCH_COURSE_CONTENTS_SUCCESS,
  FETCH_COURSE_CONTENTS_FAILURE,
  CLEAR_COURSES,
  SET_SELECTED_COURSE,
  SET_SELECTED_COURSE_CONTENT,
} from "../constants/action-types";
import FirebaseConfig from "../config/FirebaseConfig";
import { firebase } from "@firebase/app";
import "@firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

let db = firebase.firestore();

//COURSES
export const fetchCoursesBegin = () => ({
  type: FETCH_COURSES_BEGIN,
});

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: { courses },
});

export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: { error },
});

//COURSE CONTENTS
export const fetchCourseContentsBegin = () => ({
  type: FETCH_COURSE_CONTENTS_BEGIN,
});

export const fetchCourseContentsSuccess = (courseContents) => ({
  type: FETCH_COURSE_CONTENTS_SUCCESS,
  payload: { courseContents },
});

export const fetchCourseContentsFailure = (error) => ({
  type: FETCH_COURSE_CONTENTS_FAILURE,
  payload: { error },
});

export const clearCourses = () => ({
  type: CLEAR_COURSES,
  payload: null,
});

export const setSelectedCourse = (course) => ({
  type: SET_SELECTED_COURSE,
  payload: { selectedCourse: course },
});

export const setSelectedCourseContent = (courseContent) => ({
  type: SET_SELECTED_COURSE_CONTENT,
  payload: { selectedCourseContent: courseContent },
});

//apis
function getCoursesAPI(user) {
  console.log("fetching user data", user);

  let courseByStudentRef = db.collection("CourseByStudent");
  if (user) {
    const userPhone = user.phoneNumber.replace("+959", "09");
    courseByStudentRef = courseByStudentRef
      .doc(userPhone)
      .collection("courses");
  }
  return courseByStudentRef.get();
}
function getCourseContentsAPI(courseId) {
  console.log("course id is", courseId);
  let courseContentRef = db
    .collection("dataByCourse")
    .doc(courseId)
    .collection("contents")
    .get();
  return courseContentRef;
}

export function fetchCourseContents(courseId) {
  console.log("fetching course contents:=>", courseId);
  return (dispatch, getState) => {
    dispatch(fetchCourseContentsBegin());
    const user = getState().app.user;
    return getCourseContentsAPI(courseId)
      .then((querySnapshot) => {
        dispatch(
          fetchCourseContentsSuccess(
            querySnapshot.docs.map((doc) => doc.data())
          )
        );
      })
      .catch((error) => dispatch(fetchCourseContentsFailure()));
  };
}

export function fetchCourses() {
  console.log("fetching courses");
  return (dispatch, getState) => {
    dispatch(fetchCoursesBegin());
    dispatch(clearCourses());
    console.log("user from local storage", localStorage.getItem("user"));
    let user =
      firebase.auth().currentUser ??
      getState("app").user ??
      JSON.parse(localStorage.getItem("user"));

    return getCoursesAPI(user)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const courseRef = db.collection("courses").doc(doc.id);
          courseRef.get().then((querySnapshot) => {
            console.log("course data", querySnapshot.data());
            dispatch(
              fetchCoursesSuccess({ ...querySnapshot.data(), id: doc.id })
            );
          });
        });
      })
      .catch((error) => dispatch(fetchCoursesFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
