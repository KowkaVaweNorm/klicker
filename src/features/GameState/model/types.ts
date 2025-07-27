import type { EntityState } from '@reduxjs/toolkit';

export type AppliedUpgrade = {
  id: string;
  count: number;
};

export type TGameStateSchema = {
  clicks: number;
  clickPower: number;
  passiveIncome: number;
  appliedUpgrades: EntityState<AppliedUpgrade, string>;
};
