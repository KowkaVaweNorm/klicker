import { useAppSelector } from 'shared/types/redux';
import { gameStateSlice } from './slice/GameState';

export const useGameStateClicks = () =>
  useAppSelector(gameStateSlice.selectors.getClicks);
export const useGameStateClickPower = () =>
  useAppSelector(gameStateSlice.selectors.getClickPower);
export const usePassiveIncome = () =>
  useAppSelector(gameStateSlice.selectors.getPassiveIncome);
export const useCanBuyUpgrade = (upgradeId: string) =>
  useAppSelector((state) =>
    gameStateSlice.selectors.getCanBuyUpgrade(state, upgradeId),
  );
