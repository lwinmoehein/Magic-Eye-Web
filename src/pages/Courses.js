import React from 'react'
import CourseItem from '../components/Courses/CourseItem'
import '../styles/CoursesStyle.css'
import FirebaseConfig from '../config/FirebaseConfig'
import { firebase } from '@firebase/app'
import  '@firebase/firestore'
import {useEffect} from 'react'
import { connect } from "react-redux";
import { toggleProgress } from '../actions'

if (!firebase.apps.length) {
   firebase.initializeApp(FirebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

let db = firebase.firestore();

function Courses(props) {

    let [courses,setCourses] = React.useState([]);
    
    useEffect(() => {
        let coursesArray = [];
        props.toggleProgress(true);
        db.collection("courses").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                coursesArray = [...coursesArray,doc.data()];
                console.log('courses:'+courses)
            });
            setCourses(coursesArray);
            props.toggleProgress(false);
        });
    }, [])


    return (
            <div className="courses">
                <div className="coursesWrapper">
                        {courses.map(course=>{return (<CourseItem key={course.id} item={course}/>)} )}
                </div>
            </div>
    )
}

const mapStateToProps = state => {
    return { isProgressShown:state.app.isProgressShown};
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        toggleProgress: (payload) => dispatch(toggleProgress(payload)),
    }
}

export default connect(
mapStateToProps,mapDispatchToProps)(Courses);
  
