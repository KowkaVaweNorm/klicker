//TODO: Исправить порядок слоев FSD
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import '@/app/styles/index.scss';
import type { StoryFn } from '@storybook/react';
import cls from './StyleDecorator.module.scss';

export const StyleDecorator = (Story: StoryFn): JSX.Element => {
  return (
    <div className={cls.wrap}>
      <Story />
    </div>
  );
};
