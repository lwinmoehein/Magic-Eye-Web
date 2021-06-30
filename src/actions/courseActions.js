import {FETCH_COURSES_BEGIN,FETCH_COURSES_SUCCESS,FETCH_COURSES_FAILURE} from '../constants/action-types'
import FirebaseConfig from '../config/FirebaseConfig'
import { firebase } from '@firebase/app'
import  '@firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
 
let db = firebase.firestore();

export const fetchCoursesBegin = () => ({
  type: FETCH_COURSES_BEGIN
});

export const fetchCoursesSuccess = courses => ({
  type: FETCH_COURSES_SUCCESS,
  payload: { courses }
});

export const fetchCoursesFailure = error => ({
  type: FETCH_COURSES_FAILURE,
  payload: { error }
});

function getCoursesAPI(user) {
  let courseByStudentRef = db.collection("CourseByStudent");
  if(user.phoneNumber){
    const userPhone = user.phoneNumber.replace('+959','09');
    courseByStudentRef=courseByStudentRef.doc(userPhone).collection('courses');
  }
 
  return courseByStudentRef.get();
}
  
  export function fetchCourses() {
    console.log('fetching courses');
    return (dispatch,getState) => {
      dispatch(fetchCoursesBegin());
      const { app } = getState() 


      return getCoursesAPI(app.user).then((querySnapshot) => {
        let coursesArray=[];
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            coursesArray = [...coursesArray,doc.data()];
        });
        dispatch(fetchCoursesSuccess(coursesArray));
        return coursesArray;        
      }).catch(error=>dispatch(fetchCoursesFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }