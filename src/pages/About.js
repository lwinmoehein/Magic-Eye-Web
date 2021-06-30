import {React,useEffect} from 'react'
import { connect } from "react-redux"
import {toggleProgress} from "../actions"

function About(props) {
   
    return (
        <div>
            this is about content,
            why this is not working
        </div>
    )
}
const mapStateToProps = state => {
    return {user:state.app.user};
  };

const mapDispatchToProps = (dispatch) => {
    return {
        toggleProgress: (payload) => dispatch(toggleProgress(payload)),
    }
}
  
export default connect(mapStateToProps,
mapDispatchToProps)(About);

