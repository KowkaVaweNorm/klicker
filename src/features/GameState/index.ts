export { useShedulePassiveIncome } from './model/services/usePassiveIncome';

export {
  GameStateActions,
  GameStateReducer,
  useGameStateActions,
} from './model/slice/GameState';

export {
  useGameStateClickPower,
  useGameStateClicks,
  useCanBuyUpgrade,
} from './model/selectors';
export type { TGameStateSchema } from './model/types';
