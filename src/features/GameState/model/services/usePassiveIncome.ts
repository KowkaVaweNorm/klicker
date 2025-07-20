import { useEffect } from 'react';
import { usePassiveIncome } from '../selectors';
import { useGameStateActions } from '../slice/GameState';

const TICK_INTERVAL_MS = 500;

export const useShedulePassiveIncome = () => {
  const passiveIncome = usePassiveIncome();
  const { applyPassiveClicks } = useGameStateActions();
  useEffect(() => {
    console.log('passiveIncome:', passiveIncome);

    if (passiveIncome <= 0) return;

    const intervalId = setInterval(() => {
      applyPassiveClicks();
    }, TICK_INTERVAL_MS);

    return () => {
      clearInterval(intervalId);
    };
  }, [applyPassiveClicks, passiveIncome]);
};
