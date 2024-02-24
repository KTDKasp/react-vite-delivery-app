import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';
import { PREFIX } from './helpers/API.ts';
import { AuthLayout } from './layouts/AuthLayout';
import Register from './pages/Register';
import Login from './pages/Login';

import './index.css';
import { RequireAuth } from './helpers/RequireAuth.tsx';

const Menu = React.lazy(() => import('./pages/Menu'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth><MainLayout /></RequireAuth>,
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
          return defer({
            data: axios.get(`${PREFIX}/products/${params.id}`).then(data => data).catch(err => err)
          });
          // const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
          // return data;
        } 
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
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
