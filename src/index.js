import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./styles/index.css"

// Pages.
import Home from "./pages/Home";
import About from "./pages/About";
import Event from "./pages/Event";

import SquareBooking from './components/SquareBooking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/event",
    element: <Event />
  },
  {
    path: "/booking-reservation",
    element: <SquareBooking />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

