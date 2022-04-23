import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/default-layout';

const HomePage = React.lazy(() => import('./components/pages/Home/home'));

function App() {
  return (

    <Routes>
      <Route
        path=""
        element={
          <DefaultLayout />
        }
      >
        <Route
          index
          element={(
            <React.Suspense fallback={<>...</>}>
              <HomePage />
            </React.Suspense>
      )}
        />
      </Route>
    </Routes>
  );
}

export default App;
