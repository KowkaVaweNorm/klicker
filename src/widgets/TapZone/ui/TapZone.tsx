import clsx from 'clsx';
import { useRef, useState } from 'react';
import { useGameStateActions } from 'features/GameState';
import Stone from 'shared/assets/images/stone_full.png';
import cls from './TapZone.module.scss';

type TProps = {
  className?: string;
};
type TFallingStone = {
  id: number;
  x: number;
  y: number;
};

type TSpark = {
  id: number;
  x: number;
  y: number;
};

let stoneIdCounter = 0;
let sparkIdCounter = 0;

export const TapZone = (props: TProps) => {
  const { className } = props;
  const { incrementClick } = useGameStateActions();
  const [fallingStones, setFallingStones] = useState<TFallingStone[]>([]);
  const [sparks, setSparks] = useState<TSpark[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const activeTouchIdsRef = useRef<Set<number>>(new Set());
  const activeTouchIds = activeTouchIdsRef.current;

  const handleTouchStart = (e: React.TouchEvent) => {
    // Обрабатываем каждую новую точку касания
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (!activeTouchIds.has(touch.identifier)) {
        activeTouchIds.add(touch.identifier);
        triggerClick(touch.clientX, touch.clientY);
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
    triggerClick(e.clientX, e.clientY);
  };

  const triggerClick = (clientX: number, clientY: number) => {
    incrementClick();

    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Позиция искр — где был клик или тач
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Спавним камень
    setFallingStones((prev) => [
      ...prev,
      { id: stoneIdCounter++, x: centerX, y: centerY },
    ]);

    // Спавним искры
    setSparks((prev) => [...prev, { id: sparkIdCounter++, x, y }]);
  };
  const handleAnimationEnd = (id: number) => {
    setFallingStones((prev) => prev.filter((stone) => stone.id !== id));
    setSparks((prev) => prev.filter((spark) => spark.id !== id));
  };
  return (
    <div
      ref={wrapperRef}
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
      {/* Падающие камушки */}
      {fallingStones.map((stone) => (
        <img
          key={stone.id}
          src={Stone}
          alt='Падающий камень'
          className={cls.falling_stone}
          style={{
            left: stone.x,
            top: stone.y,
            transform: 'translate(-50%, -50%)',
          }}
          onAnimationEnd={() => handleAnimationEnd(stone.id)}
        />
      ))}

      {sparks.map((spark, index) => (
        <div
          data-angle={index}
          key={spark.id}
          className={cls.spark}
          style={{
            left: spark.x,
            top: spark.y,
            transform: 'translate(-50%, -50%)',
          }}
          onAnimationEnd={() => handleAnimationEnd(spark.id)}
        />
      ))}
    </div>
  );
};
