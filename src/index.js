import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "./context";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Emailer from "./pages/Emailer";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/emailer",
    element: <Emailer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
