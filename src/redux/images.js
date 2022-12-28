import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  data: [],
}
export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    getToImg: (state, action) => {
      state.data = action.payload;
    },
    
    getToFilterImg:(state,action) => {
        state.data = state.data.filter((img) => {
            return img.category = action.payload;
          });
    }
  },
})

// Action creators are generated for each case reducer function
export const { getToImg, getToFilterImg } = imagesSlice.actions

export default imagesSlice.reducer