import { TOGGLE_PROGRESS,TOGGLE_DRAWER} from "../constants/action-types";

export const toggleProgress=()=> {
    return { type: TOGGLE_PROGRESS, payload:null}
};
export const toggleDrawer=()=>{
    return {type:TOGGLE_DRAWER,payload:null}
}