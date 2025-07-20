import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { StoreDecorator } from 'shared/config/storybook';
import { StyleDecorator } from 'shared/config/storybook';
import { AntdDecorator } from 'shared/config/storybook';

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StoreDecorator, StyleDecorator, AntdDecorator],
  loaders: [mswLoader],
};

export default preview;
