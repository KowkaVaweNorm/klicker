import type { StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { makeStore } from 'app/providers/StoreProvider';

export const StoreDecorator = (Story: StoryFn): JSX.Element => {
  // Важно именно makeStore, для независимого store, на каждый сторис
  const newStore = makeStore();

  return (
    <Provider store={newStore}>
      <Story />
    </Provider>
  );
};
