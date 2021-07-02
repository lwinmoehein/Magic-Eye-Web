import { combineReducers } from "redux";
import { firebase } from "@firebase/app";
import "@firebase/auth";

import {
  TOGGLE_PROGRESS,
  TOGGLE_DRAWER,
  LOG_OUT,
  STORE_USER,
  FETCH_COURSES_BEGIN,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  CLEAR_COURSES,
  SET_SELECTED_COURSE,
  SET_SELECTED_COURSE_CONTENT,
  FETCH_COURSE_CONTENTS_BEGIN,
  FETCH_COURSE_CONTENTS_SUCCESS,
  FETCH_COURSE_CONTENTS_FAILURE,
} from "../../constants/action-types";

const defaultAppState = {
  user: JSON.parse(localStorage.getItem("user")),
  isProgressShown: false,
  progressText: "Loading..",
  isDrawerOpen: false,
  courses: [],
  courseContents: [],
  selectedCourse: null,
  selectedCourseContent: null,
};

function app(state = defaultAppState, action) {
  switch (action.type) {
    case TOGGLE_PROGRESS:
      return {
        ...state,
        isProgressShown: action.payload ? action.payload : false,
        progressText: action.payload
          ? action.payload
          : defaultAppState.progressText,
      };
    case TOGGLE_DRAWER:
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      };

    case LOG_OUT:
      return {
        ...state,
        user: null,
      };
    case STORE_USER:
      console.log("storing user:" + action.payload.phoneNumber);

      return {
        ...state,
        user: action.payload,
      };
    case FETCH_COURSES_BEGIN:
      return {
        ...state,
        isProgressShown: true,
        progressText: "Fetching Courses",
      };
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        isProgressShown: false,
        courses: [...state.courses, action.payload.courses],
      };
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        isProgressShown: false,
        courses: [],
      };
    case FETCH_COURSE_CONTENTS_BEGIN:
      return {
        ...state,
        isProgressShown: true,
        progressText: "Fetching Course Contents",
      };
    case FETCH_COURSE_CONTENTS_SUCCESS:
      return {
        ...state,
        isProgressShown: false,
        courseContents: action.payload.courseContents,
      };
    case FETCH_COURSE_CONTENTS_FAILURE:
      return {
        ...state,
        isProgressShown: false,
        courseContents: [],
      };
    case CLEAR_COURSES:
      return {
        ...state,
        courses: [],
      };
    case SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: action.payload.selectedCourse,
      };

    case SET_SELECTED_COURSE_CONTENT:
      return {
        ...state,
        selectedCourseContent: action.payload.selectedCourseContent,
      };

    default:
      return state;
  }
}

const combinedState = combineReducers({
  app,
});

export default combinedState;
