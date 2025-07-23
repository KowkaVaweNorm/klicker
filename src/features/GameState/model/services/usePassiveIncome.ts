import { useCallback, useEffect, useRef } from 'react';
import { usePassiveIncome } from '../selectors';
import { useGameStateActions } from '../slice/GameState';

export const useShedulePassiveIncome = () => {
  const passiveIncome = usePassiveIncome();
  const { addClicks } = useGameStateActions();

  const lastTime = useRef<number | null>(null);
  const timeAccumulator = useRef(0);
  const tick = useCallback(
    (currentTime: number) => {
      if (lastTime.current === null) {
        lastTime.current = currentTime;
        requestAnimationFrame(tick);
        return;
      }
      const deltaTime = currentTime - lastTime.current;
      timeAccumulator.current += deltaTime;
      lastTime.current = currentTime;

      const intervalMs = passiveIncome > 0 ? 1000 / passiveIncome : Infinity;
      let drops = 0;
      while (timeAccumulator.current >= intervalMs) {
        timeAccumulator.current -= intervalMs;
        drops++;
      }

      if (drops > 0) {
        addClicks(drops);
      }

      requestAnimationFrame(tick);
    },
    [addClicks, passiveIncome],
  );

  useEffect(() => {
    if (passiveIncome <= 0) return;
    const id = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(id);
    };
  }, [passiveIncome, tick]);
};
