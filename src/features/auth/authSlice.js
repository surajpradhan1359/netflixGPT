import { createSlice } from "@reduxjs/toolkit";
import { updateProfile } from "firebase/auth";

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
    emailVerified: (state, action) => {
      if (state.user === null) {
        return { ...action.payload };
      } else {
        return { ...state, user: { ...state.user, isVerified: true } };
      }
    },
    updateProfileOfUser: (state, action) => {
        return { ...state, user: { ...state.user, ...action.payload } };
    },
  },
});

export const { login, logout, emailVerified, updateProfileOfUser } = authSlice.actions;
export default authSlice.reducer;
