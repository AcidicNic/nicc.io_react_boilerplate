import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Section0 from "./pages/Section0";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Section0",
    element: <Section0 />,
  },
  {
    path: "/Section1",
    element: <Section1 />,
  },
  {
    path: "/Section2",
    element: <Section2 />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;