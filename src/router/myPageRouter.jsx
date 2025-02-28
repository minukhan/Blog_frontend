import { lazy, Suspense } from "react";
import MyPage from "../pages/MyHome";

const loading = <div className="bg-red-500">loading...</div>;
const PostWritePage = lazy(() => import("../pages/myPage/postWrite/Index"));
// todo
const PostViewPage = lazy(() => import("../pages/myPage/postView/Index"));
const PostEditPage = lazy(() => import("../pages/myPage/postEdit/Index"));
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
      path: "post",
      element: (
        <Suspense fallback={loading}>
          <PostViewPage />
        </Suspense>
      ),
    },
    {
      path: "edit",
      element: (
        <Suspense fallback={loading}>
          <PostEditPage />
        </Suspense>
      ),
    },
    // {
    //   path: "",
    //   element: (
    //     <Suspense fallback={loading}>
    //       <MyPage />
    //     </Suspense>
    //   ),
    // },
  ];
};

export default myPageRouter;
