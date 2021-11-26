import { RootState } from '../../store';

export const filmsSelector = (state: RootState) => state.films.films;
export const sortBySelector = (state: RootState) => state.films.sortBy;
export const statusSelector = (state: RootState) => state.films.status;
export const pageSelector = (state: RootState) => state.films.page;
