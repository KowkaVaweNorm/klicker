import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type {
  FlexAlign,
  FlexDirection,
  FlexGap,
  FlexJustify,
  FlexProps,
} from '../Flex/Flex';
import cls from '../Flex/Flex.module.scss';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart ?? '',
  center: cls.justifyCenter ?? '',
  end: cls.justifyEnd ?? '',
  between: cls.justifyBetween ?? '',
};
const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart ?? '',
  center: cls.alignCenter ?? '',
  end: cls.alignEnd ?? '',
};
const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow ?? '',
  column: cls.directionColumn ?? '',
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4 ?? '',
  8: cls.gap8 ?? '',
  16: cls.gap16 ?? '',
  24: cls.gap24 ?? '',
  32: cls.gap32 ?? '',
};
export const getFlexStyle = (props: Omit<FlexProps, 'children'>) => {
  const {
    className,
    justify = 'start',
    align = 'center',
    direction = 'row',
    wrap = 'nowrap',
    gap,
    max: maxProp,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    cls[wrap],
  ];
  if (gap !== undefined) {
    classes.push(gapClasses[gap]);
  }

  const mods: ClassValue = {
    [cls.max ?? '']: maxProp,
  };
  return {
    className: clsx(cls.Flex, mods, classes),
    ...otherProps,
  };
};
