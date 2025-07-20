import { render } from '@testing-library/react';
import React from 'react';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import {
  type FutureConfig,
  MemoryRouter,
  Route,
  Routes,
} from 'react-router-dom';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import '@/app/styles/index.scss';
import {
  makeStoreWithPreloadState,
  type RootState,
  // eslint-disable-next-line @conarti/feature-sliced/layers-slices
} from 'app/providers/StoreProvider/config/store';

type RouteOptions = {
  basename?: string;
  children?: React.ReactNode;
  /** Указать если нужно иметь history stack for testing a back navigation */
  initialEntries?: string[];
  initialIndex?: number;
  future?: FutureConfig;
};
interface ComponentRenderOptions {
  route?: {
    initialRoute?: string;
    routeOptions?: RouteOptions;
  };
  state?: {
    initialState?: DeepPartial<RootState>; // Начальное состояние стора
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function componentRender(
  component: ReactNode,
  options: ComponentRenderOptions = {},
) {
  const {
    route: { initialRoute = '/', routeOptions } = {},
    state: { initialState } = {},
  } = options;
  // @ts-expect-error Стор по умолчанию должен быть заполнен, но мы в зоне тестов!
  const generatedStore = makeStoreWithPreloadState(initialState);

  return render(
    <Provider store={generatedStore}>
      <MemoryRouter initialEntries={[initialRoute]} {...routeOptions}>
        {component}
        <Routes>
          <Route path={initialRoute} element={<> initial route</>} />
          <Route path='*' element={<>route2</>} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );
}
