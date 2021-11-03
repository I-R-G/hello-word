import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {isLoged : false}

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers:{
        login (state){
            state.isLoged = true
        },
        logout(state){
            state.isLoged = false
        }
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer