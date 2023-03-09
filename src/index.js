import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Products from './pages/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout/Checkout';

const router = createBrowserRouter ([
  {
    path: "/products/:productId",
    element: (
        <>
          <ProductDetails ></ProductDetails>
          <Link to="/products/:productId"></Link>
        </>
    ),
  },
  {
    path: "/",
    element: (
        <>
          <Products></Products>
          <Link to="/"></Link>
        </>
    )
  },
  {
    path: "/products",
    element: (
        <>
          <Products></Products>
          <Link to="/products"></Link>
        </>
    )
  },
  {
    path: "/checkout/:checkoutId",
    element: (
        <>
          <Checkout></Checkout>
          <Link to="/checkout/:checkoutId"></Link>
        </>
    )
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
