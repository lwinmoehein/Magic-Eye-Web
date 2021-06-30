import { combineReducers } from 'redux';
import {firebase} from '@firebase/app';

import {
    TOGGLE_PROGRESS,TOGGLE_DRAWER,
    LOG_OUT,STORE_USER,
    FETCH_COURSES_BEGIN,FETCH_COURSES_SUCCESS,FETCH_COURSES_FAILURE
} from '../../constants/action-types';

const defaultAppState = {
    user:localStorage.getItem('user')??'null',
    isProgressShown:false,
    progressText:'Loading..',
    isDrawerOpen:false,
    courses:[]
}

function app(state=defaultAppState, action) {
    switch(action.type){
        case TOGGLE_PROGRESS:
            return {
                ...state,
                isProgressShown:action.payload?action.payload:false,
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
        case FETCH_COURSES_BEGIN:
            return {
                ...state,
                isProgressShown: true,
                progressText: "Fetching Courses"
            };
        case FETCH_COURSES_SUCCESS:
            return {
                ...state,
                isProgressShown: false,
                courses: action.payload.courses
            };
        case FETCH_COURSES_FAILURE:
            return {
                ...state,
                isProgressShown: false,
                courses: []
              };
        default:
            return state;
    }
}

const combinedState = combineReducers({
    app
});
  
export default combinedState;