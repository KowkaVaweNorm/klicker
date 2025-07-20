import { useSelector } from 'react-redux';
import { gameStateSlice } from './slice/GameState';

export const useGameStateClicks = () =>
  useSelector(gameStateSlice.selectors.getClicks);
export const useGameStateClickPower = () =>
  useSelector(gameStateSlice.selectors.getClickPower);
export const usePassiveIncome = () =>
  useSelector(gameStateSlice.selectors.getPassiveIncome);
