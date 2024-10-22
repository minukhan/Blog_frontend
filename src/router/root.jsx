import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PostDetailpage from "../pages/PostDetailpage/PostDetailpage";

const loading = <div>loading...</div>;

const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={loading}>
        <Home />
      </Suspense>
    ),
    path: "/post/detail",
    element: (
      <Suspense fallback={loading}>
        <PostDetailpage />
      </Suspense>
    ),
  },
]);

export default root;
