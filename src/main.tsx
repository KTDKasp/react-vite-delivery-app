import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout.tsx';
import { Menu } from './pages/Menu/index.tsx';
import { Cart } from './pages/Cart/index.tsx';
import { Product } from './pages/Product/index.tsx';
import { PREFIX } from './helpers/API.ts';

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
      },
      {
        path: 'product/:id',
        element: <Product />,
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
