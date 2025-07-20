import { useGameStateActions } from 'features/GameState';

export const useClickHandler = () => {
  const { incrementClick } = useGameStateActions();

  return {
    onClick: incrementClick,
  };
};
