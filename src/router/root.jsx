import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import myPageRouter from "./myPageRouter";

const loading = <div>loading...</div>;
const MyPage = lazy(() => import("../pages/myPage/Index"));
const MainLayout = lazy(() => import("../pages/Index"));
const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={loading}>
        <MainLayout />
      </Suspense>
    ),
  },
  {
    path: "/:postId",
    element: (
      <Suspense fallback={loading}>
        <MyPage />
      </Suspense>
    ),
    children: myPageRouter(),
  },
]);

export default root;
