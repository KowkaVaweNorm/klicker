import type { ReactNode } from 'react';
import { Provider as StoreProvider } from 'react-redux';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { store } from 'app/providers/StoreProvider';
interface TestProviderProps {
  children: ReactNode;
}

export function TestProvider(props: TestProviderProps): JSX.Element {
  const { children } = props;
  return <StoreProvider store={store}>{children}</StoreProvider>;
}
