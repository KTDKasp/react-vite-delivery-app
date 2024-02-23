import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout.tsx';
import { Cart } from './pages/Cart/index.tsx';
import { Product } from './pages/Product/index.tsx';
import { PREFIX } from './helpers/API.ts';

import './index.css';

const Menu = React.lazy(() => import('./pages/Menu/index.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <React.Suspense fallback={<>Загрузка...</>}><Menu /></React.Suspense>
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'product/:id',
        element: <Product />,
        errorElement: <h2 style={{ 'padding': '40px 60px' }}>Ошибка загрузки продукта...</h2>,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
          return data;
        } 
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
