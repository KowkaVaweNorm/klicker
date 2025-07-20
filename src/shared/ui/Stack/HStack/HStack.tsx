import type { FlexProps } from '../Flex/Flex';
import { Flex } from '../Flex/Flex';
export type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
  const { children, ...otherProps } = props;
  return (
    <Flex {...otherProps} direction='row'>
      {children}
    </Flex>
  );
};
