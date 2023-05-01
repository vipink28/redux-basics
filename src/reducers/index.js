import { combineReducers } from "redux";

const counterReducer = (state = 1, action)=>{
    switch(action.type){
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        default: return state;
    }
}

const reducer = combineReducers({
    counter: counterReducer

})

export default reducer;