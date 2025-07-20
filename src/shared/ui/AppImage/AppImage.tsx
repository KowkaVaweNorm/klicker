import type { ImgHTMLAttributes } from 'react';

type TProps = ImgHTMLAttributes<HTMLImageElement>;

export const AppImage = (props: TProps) => {
  return <img {...props} />;
};
