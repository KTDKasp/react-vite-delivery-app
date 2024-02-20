import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import App from './App.tsx';
import { MainLayout } from './layouts/MainLayout.tsx';
import { Menu } from './pages/Menu/index.tsx';
import { Cart } from './pages/Cart/index.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Menu />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  },
  {
    path: '*',
    element: <h2>Error</h2>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
