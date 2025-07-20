import clsx from 'clsx';
import { useGameStateClicks } from 'features/GameState';
import StoneIcon from 'shared/assets/icons/stone.svg?react';
import TableStats from 'shared/assets/images/table_stats.png';
import { HStack } from 'shared/ui/Stack';
import cls from './ClickStats.module.scss';

type TProps = {
  className?: string;
};

export const ClickStats = (props: TProps) => {
  const { className } = props;
  const clicks = useGameStateClicks();

  return (
    <div className={clsx(cls.wrap, className)}>
      <img src={TableStats} alt='' className={cls.table_stats_img} />
      <div className={cls.text_block}>
        <span>Уровень {Math.floor(clicks / 250)}</span>
        <br />
        <HStack gap='4'>
          {Math.floor(clicks)}
          <StoneIcon className={cls.stone_icon} />
        </HStack>
      </div>
    </div>
  );
};
