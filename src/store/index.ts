import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import favoriteSlice from '../effects/favorite/favoriteSlice';

import filmsReducer from '../effects/films/filmsSlice';

const rootReducer = combineReducers({
  films: filmsReducer,
  favorite: favoriteSlice,
});

const persistConfig = {
  key: 'tmbd',
  version: 1,
  storage,
  whitelist: ['favorite'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export const persistor = persistStore(store);
