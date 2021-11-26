import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteList: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavoriteList: (state, action) => {
      state.favoriteList.push(action.payload);
    },
    removeFromFavoriteList: (state, action) => {
      state.favoriteList = state.favoriteList.filter((item) => item !== action.payload);
    },
  },
});

export const { addToFavoriteList, removeFromFavoriteList } = favoriteSlice.actions;

export default favoriteSlice.reducer;
