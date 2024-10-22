import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import UserSettings from "../pages/userSettings";

const loading = <div>loading...</div>;

const root = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={loading}>{/* <Home /> */}</Suspense>,
  },
  {
    path: "/user/settings",
    element: (
      <Suspense fallback={loading}>
        <UserSettings />
      </Suspense>
    ),
  },
]);

export default root;
