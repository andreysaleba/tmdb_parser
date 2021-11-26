import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import httpRequest from '../../utils/axios';

const initialState = {
  status: 'idle',
  films: [],
  page: 1,
  sortBy: 'popularity.desc',
};

export const fetchFilms = createAsyncThunk('auth/fetchFilms', async (data) => {
  try {
    const params = {
      sort_by: data.sortBy,
      page: data.page,
    };
    const response = await httpRequest.get('', {params});
    return response.data.results;
  } catch (error) {
    throw new Error('Smth went wrong');
  }
});

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.status = 'idle';
        state.films = action.payload;
        state.error = '';
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const { setSortBy, setPage } = filmsSlice.actions;

export default filmsSlice.reducer;
