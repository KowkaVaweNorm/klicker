import { createEntityAdapter, type PayloadAction } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { upgradeList, EUpgradeType } from 'entities/Upgrade';
import { buildSlice } from 'shared/lib/store';
import type { AppliedUpgrade, TGameStateSchema } from '../types';

const appliedUpgradeAdapter = createEntityAdapter<AppliedUpgrade>();
export const getAppliedUpgrades =
  appliedUpgradeAdapter.getSelectors<StateSchema>(
    (state) =>
      state.gameState?.appliedUpgrades ??
      appliedUpgradeAdapter.getInitialState(),
  );

const initialState: TGameStateSchema = {
  clickPower: 1,
  clicks: 100,
  passiveIncome: 0,
  appliedUpgrades: appliedUpgradeAdapter.getInitialState(),
};

export const gameStateSlice = buildSlice({
  name: 'gameState',
  initialState,
  selectors: {
    getClicks: (gameState) => gameState.clicks,
    getClickPower: (gameState) => gameState.clickPower,
    getPassiveIncome: (gameState) => gameState.passiveIncome,
    getCanBuyUpgrade: (state, upgradeId: string): boolean => {
      const upgrade = upgradeList.find((u) => u.id === upgradeId);
      if (!upgrade) return false;

      const existing = state.appliedUpgrades.entities[upgradeId];
      const level = existing?.count || 0;

      let cost = upgrade.cost.value;
      if (upgrade.cost.growth === 'exponential') {
        cost = Math.floor(
          upgrade.cost.value * upgrade.cost.multiplier ** level,
        );
      } else if (upgrade.cost.growth === 'linear') {
        cost = Math.floor(upgrade.cost.value + upgrade.cost.multiplier * level);
      }

      return state.clicks >= cost;
    },
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
    addClicks: (state: TGameStateSchema, payload: PayloadAction<number>) => {
      if (state.clicks + payload.payload < Number.MAX_SAFE_INTEGER) {
        state.clicks += payload.payload;
      } else {
        console.error(
          'Add clicks is not possible, clicks is very large number',
        );
      }
    },

    addUpgrade(
      state: TGameStateSchema,
      action: PayloadAction<{ upgradeId: string }>,
    ) {
      const { upgradeId } = action.payload;
      const upgrade = upgradeList.find((up) => up.id === upgradeId);
      if (!upgrade) return;

      const existing = state.appliedUpgrades.entities[upgradeId];
      const level = existing?.count || 0;

      let cost = upgrade.cost.value;

      if (upgrade.cost.growth === 'exponential') {
        cost = Math.floor(
          upgrade.cost.value * upgrade.cost.multiplier ** level,
        );
      } else if (upgrade.cost.growth === 'linear') {
        cost = Math.floor(upgrade.cost.value * upgrade.cost.multiplier * level);
      }

      if (state.clicks < cost) return;
      state.clicks -= cost;

      // Применяем эффект
      if (upgrade.effect.type === EUpgradeType.CLICK_POWER) {
        state.clickPower += upgrade.effect.value;
      }
      if (upgrade.effect.type === EUpgradeType.PASSIVE_INCOME) {
        state.passiveIncome += upgrade.effect.value;
      }

      if (existing) {
        appliedUpgradeAdapter.updateOne(state.appliedUpgrades, {
          id: upgradeId,
          changes: { count: existing.count + 1 },
        });
      } else {
        appliedUpgradeAdapter.addOne(state.appliedUpgrades, {
          id: upgradeId,
          count: 1,
        });
      }
    },
    // addClickPower: (
    //   state: TGameStateSchema,
    //   payload: PayloadAction<{ powerToAdd: number; cost: number }>,
    // ) => {
    //   if (
    //     state.clicks - payload.payload.cost >= 0 &&
    //     state.clickPower + payload.payload.powerToAdd < Number.MAX_SAFE_INTEGER
    //   ) {
    //     state.clicks -= payload.payload.cost;
    //     state.clickPower += payload.payload.powerToAdd;
    //   }
    // },
    // addPassiveIncome: (
    //   state: TGameStateSchema,
    //   payload: PayloadAction<{ incomeToAdd: number; cost: number }>,
    // ) => {
    //   if (
    //     state.clicks - payload.payload.cost > 0 &&
    //     state.passiveIncome + payload.payload.incomeToAdd <
    //       Number.MAX_SAFE_INTEGER
    //   ) {
    //     state.clicks -= payload.payload.cost;
    //     state.passiveIncome += payload.payload.incomeToAdd;
    //   }
    // },
  },
});

export const {
  actions: GameStateActions,
  reducer: GameStateReducer,
  selectors: gameStateSelectors,
  useActions: useGameStateActions,
} = gameStateSlice;
