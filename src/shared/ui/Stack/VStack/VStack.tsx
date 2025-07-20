import { Flex, type FlexProps } from '../Flex/Flex';

export type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => {
  const { align = 'start', children, ...otherProps } = props;
  return (
    <Flex {...otherProps} align={align} direction='column'>
      {children}
    </Flex>
  );
};
