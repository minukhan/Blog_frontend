import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import UserSettings from "../pages/userSettings";
import MyHome from "../pages/MyHome";

const loading = <div>loading...</div>;

const root = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={loading}>{/* <Home /> */}</Suspense>,
  },
  {
    path: "/user/settings/:uid",
    element: (
      <Suspense fallback={loading}>
        <UserSettings />
      </Suspense>
    ),
  },
  {
    path: "/mypage",
    element: (
      <Suspense fallback={loading}>
        <MyHome />
      </Suspense>
    ),
  },
]);

export default root;
