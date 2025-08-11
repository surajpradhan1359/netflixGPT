import { configureStore } from '@reduxjs/toolkit'
import popupReducer from "../features/Popup/popupSlice";
import authReducer from "../features/auth/authSlice";
import movieReducer from "../features/movies/moviesSlice";

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        auth: authReducer,
        movies: movieReducer
    }
})