import {
  FETCH_COURSES_BEGIN,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  FETCH_COURSE_CONTENTS_BEGIN,
  FETCH_COURSE_CONTENTS_SUCCESS,
  FETCH_COURSE_CONTENTS_FAILURE,
  FETCH_VIDEOS_BEGIN,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
  FETCH_PDFS_BEGIN,
  FETCH_PDFS_SUCCESS,
  FETCH_PDFS_FAILURE,
  FETCH_LINKS_BEGIN,
  FETCH_LINKS_SUCCESS,
  FETCH_LINKS_FAILURE,
  CLEAR_COURSES,
  SET_SELECTED_COURSE,
  SET_SELECTED_COURSE_CONTENT,
  SET_SELECTED_VIDEO,
  SET_SELECTED_PDF,
  SET_SELECTED_LINK,
  FETCH_CATALOGS_BEGIN,
  FETCH_CATALOGS_SUCCESS,
  FETCH_CATALOGS_FAILURE,
  FETCH_USER_INFO_BEGIN,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE,
} from "../constants/action-types";
import FirebaseConfig from "../config/FirebaseConfig";
import { firebase } from "@firebase/app";
import "@firebase/firestore";
import { toggleProgress } from ".";

if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

let db = firebase.firestore();

//catalogs
export const fetchCatalogsBegin = () => ({
  type: FETCH_CATALOGS_BEGIN,
});

export const fetchCatalogsSuccess = (catalogs) => ({
  type: FETCH_CATALOGS_SUCCESS,
  payload: catalogs,
});

export const fetchCatalogsFailure = (error) => ({
  type: FETCH_CATALOGS_FAILURE,
  payload: { error },
});
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

//videos

//COURSE CONTENTS
export const fetchVideosBegin = () => ({
  type: FETCH_VIDEOS_BEGIN,
});

export const fetchVideosSuccess = (videos) => ({
  type: FETCH_VIDEOS_SUCCESS,
  payload: videos,
});

export const fetchVideosFailure = (error) => ({
  type: FETCH_VIDEOS_FAILURE,
  payload: { error },
});
//pdfs
export const fetchPDFsBegin = () => ({
  type: FETCH_PDFS_BEGIN,
});

export const fetchPDFsSuccess = (pdfs) => ({
  type: FETCH_PDFS_SUCCESS,
  payload: pdfs,
});

export const fetchPDFsFailure = (error) => ({
  type: FETCH_PDFS_FAILURE,
  payload: { error },
});

export const fetchLinksBegin = () => ({
  type: FETCH_LINKS_BEGIN,
});

export const fetchLinksSuccess = (links) => ({
  type: FETCH_LINKS_SUCCESS,
  payload: links,
});

export const fetchLinksFailure = (error) => ({
  type: FETCH_LINKS_FAILURE,
  payload: { error },
});
//user info
export const fetchUserInfoBegin = () => ({
  type: FETCH_USER_INFO_BEGIN,
});

export const fetchUserInfoSuccess = (userInfo) => ({
  type: FETCH_USER_INFO_SUCCESS,
  payload: userInfo,
});

export const fetchUserInfoFailure = (error) => ({
  type: FETCH_USER_INFO_FAILURE,
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

export const setSelectedVideo = (video) => ({
  type: SET_SELECTED_VIDEO,
  payload: { selectedVideo: video },
});
export const setSelectedPDF = (pdf) => ({
  type: SET_SELECTED_PDF,
  payload: { selectedPDF: pdf },
});
export const setSelectedLink = (link) => ({
  type: SET_SELECTED_LINK,
  payload: { selectedLink: link },
});

//apis
function getCatalogsAPI() {
  let catalogsRef = db.collection("courses");

  return catalogsRef.get();
}
function getCoursesAPI(user) {
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
  let courseContentRef = db
    .collection("dataByCourse")
    .doc(courseId)
    .collection("contents")
    .get();
  return courseContentRef;
}
function fetchVideosAPI(courseId, courseContentId) {
  let videosRef = db
    .collection("VideoByContent")
    .doc(courseId.trim())
    .collection(courseContentId)
    .orderBy("createdDate", "asc")
    .get();

  return videosRef;
}
function fetchPDFsAPI(courseId, courseContentId) {
  let pdfsRef = db
    .collection("PdfByContent")
    .doc(courseId.trim())
    .collection(courseContentId.trim())
    //.where("visible", "==", true)
    .orderBy("createdDate", "asc")
    .get();

  return pdfsRef;
}

function fetchLinksAPI(courseId, courseContentId) {
  let pdfsRef = db
    .collection("LinkByContent")
    .doc(courseId.trim())
    .collection(courseContentId.trim())
    .orderBy("createdDate", "asc")
    .where("visible", "==", true)
    .get();

  return pdfsRef;
}

function fetchUserInfoAPI(user) {
  const phoneNumber = user.phoneNumber.replace("+959", "09");
  let userRef = db.collection("students").doc(phoneNumber).get();

  return userRef;
}
//course contents
export function fetchCourseContents(courseId) {
  return (dispatch, getState) => {
    dispatch(fetchCourseContentsBegin());
    const user = getState().app.user;
    return getCourseContentsAPI(courseId.trim())
      .then((querySnapshot) => {
        dispatch(
          fetchCourseContentsSuccess(
            querySnapshot.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          )
        );
      })
      .catch((error) => dispatch(fetchCourseContentsFailure()));
  };
}
//videos
export function fetchVideos(payload) {
  return (dispatch, getState) => {
    dispatch(fetchVideosBegin());
    return fetchVideosAPI(payload.courseId, payload.contentId)
      .then((querySnapshot) => {
        let payload = querySnapshot.docs.map((doc) => {
          console.log(doc.data());
          return { ...doc.data(), id: doc.id };
        });

        payload = payload.filter((v) => v.visible);
        dispatch(fetchVideosSuccess(payload));
      })
      .catch((error) => dispatch(fetchVideosFailure()));
  };
}

//videos
export function fetchPDFs(payload) {
  return (dispatch, getState) => {
    dispatch(fetchPDFsBegin());
    return fetchPDFsAPI(payload.courseId, payload.contentId)
      .then((querySnapshot) => {
        let payload = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        payload = payload.filter((pdf) => pdf.visible);
        dispatch(fetchPDFsSuccess(payload));
      })
      .catch((error) => dispatch(fetchPDFsFailure()));
  };
}

//links
export function fetchLinks(payload) {
  return (dispatch, getState) => {
    dispatch(fetchLinksBegin());
    return fetchLinksAPI(payload.courseId, payload.contentId)
      .then((querySnapshot) => {
        let payload = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        payload = payload.filter((link) => link.visible);

        dispatch(fetchLinksSuccess(payload));
      })
      .catch((error) => dispatch(fetchLinksFailure()));
  };
}

export function fetchCourses() {
  return (dispatch, getState) => {
    dispatch(fetchCoursesBegin());
    dispatch(clearCourses());
    let user =
      firebase.auth().currentUser ??
      getState("app").user ??
      JSON.parse(localStorage.getItem("user"));

    return getCoursesAPI(user)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const courseRef = db.collection("courses").doc(doc.id.trim());

          courseRef.get().then((querySnapshot) => {
            if (querySnapshot.exists) {
              dispatch(
                fetchCoursesSuccess({ ...querySnapshot.data(), id: doc.id })
              );
            } else {
            }
          });
        });
        //disable progress finally
        dispatch(toggleProgress(false));
      })
      .catch((error) => dispatch(fetchCoursesFailure(error)));
  };
}

export function fetchCatalogs() {
  return (dispatch, getState) => {
    dispatch(fetchCatalogsBegin());

    return getCatalogsAPI()
      .then((querySnapshot) => {
        let catalogs = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        dispatch(fetchCatalogsSuccess(catalogs));
      })
      .catch((error) => dispatch(fetchCatalogsFailure(error)));
  };
}

export function fetchUserInfo() {
  return (dispatch, getState) => {
    dispatch(fetchUserInfoBegin());
    let user =
      firebase.auth().currentUser ??
      getState("app").user ??
      JSON.parse(localStorage.getItem("user"));

    return fetchUserInfoAPI(user)
      .then((doc) => {
        dispatch(fetchUserInfoSuccess(doc.data()));
      })
      .catch((error) => dispatch(fetchUserInfoFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
