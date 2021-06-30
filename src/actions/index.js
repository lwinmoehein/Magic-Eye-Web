import { TOGGLE_PROGRESS,TOGGLE_DRAWER,LOG_OUT, STORE_USER} from "../constants/action-types";

export function toggleProgress(payload) {
    return { type: TOGGLE_PROGRESS, payload:payload}
};
export function toggleDrawer(){
    return { type:TOGGLE_DRAWER,payload:null }
}

export function logOut(){
    localStorage.setItem('user',null);
    return {type:LOG_OUT}
}

export function storeUser(payload){
    localStorage.setItem('user',payload);
    return {type:STORE_USER,payload};
}