import type { VStackProps } from '../VStack/VStack';
import { getFlexStyle } from './getFlexStyle';

export const getVStackStyle = (props?: Omit<VStackProps, 'children'>) => {
  return getFlexStyle({
    ...props,
    direction: 'column',
    align: 'start',
  });
};
