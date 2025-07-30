import { configureStore } from '@reduxjs/toolkit'
import popupReducer from "../features/Popup/popupSlice" 

export const store = configureStore({
    reducer: {
        popup: popupReducer
    }
})