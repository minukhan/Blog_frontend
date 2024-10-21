import { lazy, Suspense } from "react";

const loading = <div className="bg-red-500">loading...</div>;
const PostWritePage = lazy(() => import("../pages/myPage/postWrite/Index"));

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
  ];
};

export default myPageRouter;
