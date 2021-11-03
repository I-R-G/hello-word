//import { createStore } from "redux";
//When installing redux toolkit you can remove redux from the package json file since redux toolkit already includes it
import {configureStore } from "@reduxjs/toolkit";// configureStore replaces the createStore method
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

/*
function counterReducer (state = initialState, action){
    if(action.type === "increment"){
        return {
            counter: state.counter + 1,
            isVisible: state.isVisible
        }
    }

    if(action.type === "increase"){
        return {
            counter: state.counter + action.value,
            isVisible: state.isVisible
        }
    }
    if(action.type === "decrement"){
        return {
            counter: state.counter - 1,
            isVisible: state.isVisible

        }
    }

    if(action.type === "toggleCounterVisibility"){
        return {
            counter: state.counter,
            isVisible: !state.isVisible
        }
    }

    return state
}

const store = createStore(counterReducer)
*/

const store = configureStore({
    reducer: {counter: counterSlice, auth: authSlice}
})
//configureStore facilitate to merge multiples reducers in the store if you have more than one

/*
if you have multiple reducers you can do like this => 

const store = configureStore({
    reducer: {counter: counterSlicer.reducer, (...other reducers)}
})
*/

//Redux will create unique actions so you don't have to worry about it

export default store