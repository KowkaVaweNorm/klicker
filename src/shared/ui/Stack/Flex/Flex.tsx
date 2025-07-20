import {
  type MutableRefObject,
  type RefObject,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { getFlexStyle } from '../utils/getFlexStyle';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'nowrap' | 'wrap';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

export interface FlexProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  gap?: FlexGap;
  max?: boolean;
  flexref?:
    | MutableRefObject<HTMLElement>
    | null
    | RefObject<HTMLElement | null>;
}

export const Flex = (props: FlexProps) => {
  const { children } = props;

  return <div {...getFlexStyle(props)}>{children}</div>;
};
