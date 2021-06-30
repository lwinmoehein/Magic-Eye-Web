import React from 'react'
import CourseItem from '../components/Courses/CourseItem'
import '../styles/CoursesStyle.css'
import FirebaseConfig from '../config/FirebaseConfig'
import { firebase } from '@firebase/app'
import  '@firebase/firestore'
import {useEffect} from 'react'
import { connect } from "react-redux";
import { toggleProgress } from '../actions'
import {fetchCourses} from '../actions/courseActions'

if (!firebase.apps.length) {
   firebase.initializeApp(FirebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

let db = firebase.firestore();

function Courses(props) {
               
    useEffect(() => {
        props.fetchCourses();
    }, [])


    return (
            <div className="courses">
                <div className="coursesWrapper">
                        {props.courses.map(course=>{return (<CourseItem key={course.id} item={course}/>)} )}
                </div>
            </div>
    )
}

const mapStateToProps = state => {
    return { 
        isProgressShown:state.app.isProgressShown,
        courses:state.app.courses
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        toggleProgress: (payload) => dispatch(toggleProgress(payload)),
        fetchCourses:()=>dispatch(fetchCourses())
    }
}

export default connect(
mapStateToProps,mapDispatchToProps)(Courses);
  
