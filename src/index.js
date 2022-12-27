import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import About from "./components/About"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/about",
        element: <About />,
      }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
