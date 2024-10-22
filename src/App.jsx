import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import PostDetailpage from "./pages/PostDetailpage/PostDetailpage";

function App() {
  return (
    <>
      <RouterProvider router={root} />
      <PostDetailpage />
      <h2>Start</h2>
    </>
  );
}

export default App;
