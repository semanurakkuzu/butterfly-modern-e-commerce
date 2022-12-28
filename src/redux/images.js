import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setImages } = imagesSlice.actions;

export default imagesSlice.reducer;
