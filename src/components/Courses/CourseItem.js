import React from 'react'
import CourseItemStyle from '../../styles/CourseItemStyle.css'

function CourseItem(props) {
    return (
        <div className="courseItem">
            <span>{props.item.name}</span>
        </div>
    )
   
}

export default CourseItem
