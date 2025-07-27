import clsx from 'clsx';
import { useGameStateActions } from 'features/GameState';
import { useCanBuyUpgrade } from 'features/GameState';
import type { Upgrade } from 'entities/Upgrade';
import { AppImage } from 'shared/ui';
import cls from './UpgradeItem.module.scss';

type TProps = {
  className?: string;
} & Upgrade;

export const UpgradeItem = (props: TProps) => {
  const { image_src, className, id } = props;
  const { addUpgrade } = useGameStateActions();
  const canBuy = useCanBuyUpgrade(id);

  return (
    <div
      className={clsx(cls.wrap, { [cls.disabled]: !canBuy }, className)}
      onMouseDown={() => {
        if (canBuy) {
          addUpgrade({ upgradeId: id });
        }
      }}
    >
      <AppImage src={image_src} alt='' className={cls.logo} />
    </div>
  );
};
