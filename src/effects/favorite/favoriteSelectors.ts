import { RootState } from '../../store';

export const favoriteListSelector = (state: RootState) => state.favorite.favoriteList;
