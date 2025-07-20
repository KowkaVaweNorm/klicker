import clsx from 'clsx';
import { useGameStateActions, useGameStateClicks } from 'features/GameState';
import type { Upgrade } from 'entities/Upgrade';
import { EUpgradeType } from 'entities/Upgrade/model/types';
import { AppImage } from 'shared/ui';
import cls from './UpgradeItem.module.scss';

type TProps = {
  className?: string;
} & Upgrade;

export const UpgradeItem = (props: TProps) => {
  const { image_src, className, cost, effect } = props;
  const { addClickPower, addPassiveIncome } = useGameStateActions();
  const clicks = useGameStateClicks();

  return (
    <div
      className={clsx(cls.wrap, { [cls.disabled]: clicks < cost }, className)}
      onMouseDown={() => {
        if (effect.type === EUpgradeType.CLICK_POWER) {
          addClickPower({ cost: cost, powerToAdd: effect.value });
        }
        if (effect.type === EUpgradeType.PASSIVE_INCOME) {
          addPassiveIncome({ cost: cost, incomeToAdd: effect.value });
        }
      }}
    >
      <AppImage src={image_src} alt='' className={cls.logo} />
    </div>
  );
};
