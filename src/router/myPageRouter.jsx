import { lazy, Suspense } from "react";

const loading = <div className="bg-red-500">loading...</div>;
const PostWritePage = lazy(() => import("../pages/myPage/postWrite/Index"));
// todo
const PostViewPage = lazy(() => import("../pages/myPage/\bpostsView/Index"));

const myPageRouter = () => {
  return [
    {
      path: "newpost",
      element: (
        <Suspense fallback={loading}>
          <PostWritePage />
        </Suspense>
      ),
    },
    {
      path: "",
      element: (
        <Suspense fallback={loading}>
          <PostViewPage />
        </Suspense>
      ),
    },
  ];
};

export default myPageRouter;
