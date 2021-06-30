import React from 'react'
import { connect } from "react-redux";
import {TOGGLE_PROGRESS} from '../../constants/action-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toggleProgress } from '../../actions';
import { useSelector } from 'react-redux';

//component
function ProgressBar(props) {
    if(props.isProgressShown)
    return (
        <div onClick={()=>props.toggleProgress()}  style={{
            width:'100%',height:'100%',
            position: 'absolute', left: '50%',top:'50%',
            transform: 'translate(-50%, -50%)',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <span style={{marginRight:'10px',color:'blue',fontWeight:'bold'}}>{props.progressText??'Please wait'}</span>  <CircularProgress/>
        </div>
    )
    return (<div></div>)
}

//mapping dispatches and states to props
const mapStateToProps = state => {
    return { isProgressShown: state.app.isProgressShown , progressText:state.app.progressText};
};

const mapDispatchToProps = (dispatch) => {
    return {
      toggleProgress: () => dispatch(toggleProgress()),
    }
}
//export final component
export default connect(
    mapStateToProps,mapDispatchToProps)(ProgressBar);
