import { TOGGLE_PROGRESS,TOGGLE_DRAWER,LOG_OUT, STORE_USER} from "../constants/action-types";

export function toggleProgress(payload) {
    return { type: TOGGLE_PROGRESS, payload:payload}
};
export function toggleDrawer(){
    return { type:TOGGLE_DRAWER,payload:null }
}

export function logOut(){
    return {type:LOG_OUT}
}

export function storeUser(payload){
    return {type:STORE_USER,payload};
}