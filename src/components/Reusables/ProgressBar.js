import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

function ProgressBar(props) {
    if(props.isShown)
    return (
        <div  style={{
            width:'100%',height:'100%',
            position: 'absolute', left: '50%',top:'50%',
            transform: 'translate(-50%, -50%)',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <span style={{marginRight:'10px',color:'blue',fontWeight:'bold'}}>{props.status??'Please wait'}</span>  <CircularProgress/>
        </div>
    )
    return (<div></div>)
}

export default ProgressBar
