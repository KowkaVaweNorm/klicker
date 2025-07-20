import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router';
import { PageLoader } from '@/widgets/PageLoader';
import { type AppRoutesProps } from '@/shared/types/router';
import { routeConfig } from '../config/routerConfig';

const AppRouter = (): JSX.Element => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

    return (
      <Route
        index={route.path === '/'}
        key={route.path}
        path={route.path}
        element={
          // route.authOnly !== undefined ? (
          //   <RequireAuth roles={route.roles}>{element}</RequireAuth>
          // ) : (
          element
          // )
        }
      />
    );
  }, []);

  return (
    <>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </>
  );
};

export default memo(AppRouter);
