import type { HStackProps } from '../HStack/HStack';
import { getFlexStyle } from './getFlexStyle';

export const getHStackStyle = (props?: Omit<HStackProps, 'children'>) => {
  return getFlexStyle({
    direction: 'row',
    ...props,
  });
};
