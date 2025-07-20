import { useShedulePassiveIncome } from 'features/GameState';
import './styles/index.scss';
import { AppRouter } from './providers/router';

export const App = (): JSX.Element => {
  useShedulePassiveIncome();

  return <AppRouter />;
};
