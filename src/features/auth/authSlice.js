import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        emailVerified: (state,action) => {
            if(state.user === null){
                return {...action.payload}
            }else{
            return { ...state, user: { ...state.user, isVerified: true } }
            }
        }
    }
})

export const { login, logout, emailVerified } = authSlice.actions;
export default authSlice.reducer;