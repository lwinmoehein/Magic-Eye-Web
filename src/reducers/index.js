import { TOGGLE_DRAWER, TOGGLE_PROGRESS } from "../constants/action-types";

const initialState = {
    isProgressShown: true,
    left:false
};
  
function rootReducer(state = initialState, action) {
    if (action.type === TOGGLE_PROGRESS) {
        state.isProgressShown=!state.isProgressShown
    }
    if(action.type===TOGGLE_DRAWER){
        state.left=!state.left
    }
    return state;
};

export default rootReducer;