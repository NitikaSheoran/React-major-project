import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, option)=>{
            state.status = true;
            state.userData = option.payload.userData;
        },
        logout: (state, option)=>{
            state.status=false;
            state.userData=null;
        },
        getUser: (state, option)=>{
            return state.userData;
        }
    }
})
export const {login, logout, getUser} = authSlice.actions;
export default authSlice.reducer;