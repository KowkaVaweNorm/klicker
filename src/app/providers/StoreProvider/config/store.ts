import {
  type Action,
  type ThunkAction,
  configureStore,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { GameStateReducer } from 'features/GameState';
import { rtkApi } from 'shared/api';

export const makeStore = () => {
  const newStore = configureStore({
    devTools: import.meta.env.DEV,
    reducer: {
      gameState: GameStateReducer,
      [rtkApi.reducerPath]: rtkApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(rtkApi.middleware);
    },
  });

  setupListeners(newStore.dispatch);
  return newStore;
};

export type RootState = ReturnType<typeof store.getState>;

// For tests
export const makeStoreWithPreloadState = (
  preloadedState?: RootState,
): ReturnType<typeof makeStore> => {
  const newStore = configureStore({
    devTools: import.meta.env.DEV,
    reducer: {
      gameState: GameStateReducer,
      [rtkApi.reducerPath]: rtkApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(rtkApi.middleware);
    },
    preloadedState,
  });

  setupListeners(newStore.dispatch);
  return newStore;
};

export const store = makeStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
