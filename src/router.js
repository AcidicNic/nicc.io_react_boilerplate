import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Newsletter from "./pages/Newsletter";
import EmailReps from "./pages/EmailReps";
import Donate from "./pages/Donate";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/newsletter",
    element: <Newsletter />,
  },
  {
    path: "/action",
    element: <EmailReps />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;