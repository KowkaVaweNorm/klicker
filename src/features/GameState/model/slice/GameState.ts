import type { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from 'shared/lib/store';
import type { TGameStateSchema } from '../types';

const initialState: TGameStateSchema = {
  clickPower: 1,
  clicks: 100,
  passiveIncome: 0,
};

export const gameStateSlice = buildSlice({
  name: 'gameState',
  initialState,
  selectors: {
    getClicks: (gameState) => gameState.clicks,
    getClickPower: (gameState) => gameState.clickPower,
    getPassiveIncome: (gameState) => gameState.passiveIncome,
  },
  reducers: {
    incrementClick: (state: TGameStateSchema, _: PayloadAction<void>) => {
      if (state.clicks + 1 < Number.MAX_SAFE_INTEGER) {
        state.clicks += 1 * state.clickPower;
      } else {
        console.error(
          'incement click is not possible, clicks is very large number',
        );
      }
    },
    applyPassiveClicks: (state: TGameStateSchema, _: PayloadAction<void>) => {
      if (state.clicks + state.passiveIncome < Number.MAX_SAFE_INTEGER) {
        state.clicks += state.passiveIncome;
      } else {
        console.error(
          'Add Passive clicks is not possible, clicks is very large number',
        );
      }
    },
    addClickPower: (
      state: TGameStateSchema,
      payload: PayloadAction<{ powerToAdd: number; cost: number }>,
    ) => {
      if (
        state.clicks - payload.payload.cost >= 0 &&
        state.clickPower + payload.payload.powerToAdd < Number.MAX_SAFE_INTEGER
      ) {
        state.clicks -= payload.payload.cost;
        state.clickPower += payload.payload.powerToAdd;
      }
    },
    addPassiveIncome: (
      state: TGameStateSchema,
      payload: PayloadAction<{ incomeToAdd: number; cost: number }>,
    ) => {
      if (
        state.clicks - payload.payload.cost > 0 &&
        state.passiveIncome + payload.payload.incomeToAdd <
          Number.MAX_SAFE_INTEGER
      ) {
        state.clicks -= payload.payload.cost;
        state.passiveIncome += payload.payload.incomeToAdd;
      }
    },
  },
});

export const {
  actions: GameStateActions,
  reducer: GameStateReducer,
  selectors: gameStateSelectors,
  useActions: useGameStateActions,
} = gameStateSlice;
