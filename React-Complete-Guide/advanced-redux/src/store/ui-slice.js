import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {displayCart : false , notification: null}

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUiState,
    reducers : {
        displayCart(state){
            state.displayCart = !state.displayCart
        },
        showNotification(state,action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export default uiSlice.reducer
export const uiActions = uiSlice.actions