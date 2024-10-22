import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const loading = <div>loading...</div>;

const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={loading}>
        <Home />
      </Suspense>
    ),
  },
]);

export default root;
