import clsx from 'clsx';
import { useGameStateActions } from 'features/GameState';
import Stone from 'shared/assets/images/stone_full.png';
import cls from './TapZone.module.scss';

type TProps = {
  className?: string;
};

export const TapZone = (props: TProps) => {
  const { className } = props;
  const { incrementClick } = useGameStateActions();

  const activeTouchIds = new Set<number>();

  const handleTouchStart = (e: React.TouchEvent) => {
    // Обрабатываем каждую новую точку касания
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (!activeTouchIds.has(touch.identifier)) {
        activeTouchIds.add(touch.identifier);
        triggerClick();
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Очищаем ID завершённых тачей
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      activeTouchIds.delete(touch.identifier);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if ('ontouchstart' in window) return;
    triggerClick();
  };

  const triggerClick = () => {
    incrementClick();
    // SoundModule.play('click');
  };

  return (
    <div
      className={clsx(cls.stone_wrapper, className)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onClick={handleClick}
      role='button'
      tabIndex={0}
      aria-label='Tap to click'
    >
      <img src={Stone} alt='Кликабельный камень' className={cls.stone} />
    </div>
  );
};
