import { combineReducers } from 'redux';
import {firebase} from '@firebase/app';

import {
    TOGGLE_PROGRESS,
    TOGGLE_DRAWER,
    LOG_OUT,
    STORE_USER
} from '../../constants/action-types';

const defaultAppState = {
    user:null,
    isProgressShown:false,
    progressText:'Loading..',
    isDrawerOpen:false
}

function app(state=defaultAppState, action) {
    switch(action.type){
        case TOGGLE_PROGRESS:
            return {
                ...state,
                isProgressShown:action.payload?action.payload:!state.isProgressShown,
                progressText:action.payload??defaultAppState.progressText
            };
        case TOGGLE_DRAWER:
            return {
                ...state,
                isDrawerOpen:!state.isDrawerOpen
            }
         
        case LOG_OUT:
            return {
                ...state,
                user:firebase.auth().logout(),
            }
        case STORE_USER:
            return {
                ...state,
                user:action.payload,
            }
        default:
            return state;
    }
}

const combinedState = combineReducers({
    app
});
  
export default combinedState;