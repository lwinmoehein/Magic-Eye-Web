import React from 'react'
import CourseItem from '../components/Courses/CourseItem'
import '../styles/CoursesStyle.css'
import FirebaseConfig from '../config/FirebaseConfig'
import { firebase } from '@firebase/app'
import  '@firebase/firestore'
import {useEffect} from 'react'

if (!firebase.apps.length) {
   firebase.initializeApp(FirebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

let db = firebase.firestore();

function Courses() {

    let [courses,setCourses] = React.useState([]);
    
    useEffect(() => {
        db.collection("courses").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
         
                setCourses([...courses,doc.data()]);
                console.log('courses:'+courses)
            });
        });
    }, [])


    return (
            <div className="coursesWrapper">
                    {courses.map(course=>{return (<CourseItem key={course.id} item={course}/>)} )}
            </div>
    )
}

export default Courses
