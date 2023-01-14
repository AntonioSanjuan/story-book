import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/default-layout';

const HomePage = React.lazy(() => import('./components/pages/Home/home'));
const TablePage = React.lazy(() => import('./components/pages/Tables/Tables'));
const FormPage = React.lazy(() => import('./components/pages/Forms/Forms'));

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
          path=""
          element={(
            <React.Suspense fallback={<>...</>}>
              <HomePage />
            </React.Suspense>
          )}
        />
        <Route
          path="tables"
          element={(
            <React.Suspense fallback={<>...</>}>
              <TablePage />
            </React.Suspense>
          )}
        />
        <Route
          path="forms"
          element={(
            <React.Suspense fallback={<>...</>}>
              <FormPage />
            </React.Suspense>
          )}
        />
      </Route>
    </Routes>
  );
}

export default App;
