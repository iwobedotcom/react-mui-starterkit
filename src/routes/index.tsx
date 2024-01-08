import { Suspense } from 'react';
import AuthLayout from '@/layout/auth';
import DefaultLayout from '@/layout/default';
import AppLoader from '@/components/app-loader';
import { Route, Routes } from 'react-router-dom';

import { authRoutes, defaultRoutes } from './all-routes';

function AppRouter() {
  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        <Route>
          {authRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<AuthLayout>{route.component}</AuthLayout>}
              key={idx}
            />
          ))}
        </Route>
        <Route>
          {defaultRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<DefaultLayout>{route.component}</DefaultLayout>}
              key={idx}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
