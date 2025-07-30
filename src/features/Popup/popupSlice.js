import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: "popup",
    initialState: {
        isOpen: false,
        content: null,
    },
    reducers: {
        openPopup: (state, action) => {
            state.isOpen = true;
            state.content = action.payload;
        },
        closePopup: (state) => {
            state.isOpen = false;
            state.content = null;
        },
    },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;