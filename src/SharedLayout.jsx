import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from './components/Loader/Loader';

const SharedLayout = () => {
  return (
      <main>
        <Suspense fallback={<Loader loading />}>
          <Outlet />
        </Suspense>
      </main>
  );
};

export default SharedLayout;
