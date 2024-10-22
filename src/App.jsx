import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import useAuth from "./hooks/useAuth";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import PlayModal from "./components/modal/PlayModal";
import PlayModalFull from "./components/modal/PlayModalFull";
function App() {
  const { loggedIn } = useAuth(); // 로그인 여부 확인
  const { isPlayModalOpen } = useSelector((state) => state.modal);

  return (
    <>
      <RouterProvider router={root} />
      {/* {loggedIn &&
        createPortal(
          isPlayModalOpen ? <PlayModal /> : <PlayModalFull />,
          document.body
        )} */}
      {loggedIn && createPortal(<PlayModalFull />, document.body)}
    </>
  );
}

export default App;
