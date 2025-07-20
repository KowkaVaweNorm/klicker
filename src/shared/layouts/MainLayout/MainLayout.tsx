// MainLayout.tsx обновлённый
import type { ReactElement, ReactNode } from 'react';
import cls from './MainLayout.module.scss';

type TProps = {
  StatsElement: ReactElement;
  UpgradesElement: ReactElement;
  children: ReactNode; // TapZone
};

export const MainLayout = (props: TProps) => {
  const { StatsElement, UpgradesElement, children } = props;

  return (
    <div className={cls.mainLayout}>
      <div className={cls.stats}>{StatsElement}</div>
      <div className={cls.upgrades}>{UpgradesElement}</div>
      <div className={cls.center}>{children}</div>
    </div>
  );
};
