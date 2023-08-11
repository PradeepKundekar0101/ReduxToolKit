import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import Cart from './components/Cart/Cart';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
        path: "/cart",
        element: <Cart/>
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

