import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import useAuth from "./hooks/useAuth";
import { createPortal } from "react-dom";
import PlayModal from "./components/modal/PlayModal";
import PlayModalFull from "./components/modal/PlayModalFull";
import { useState } from "react";
function App() {
  const { loggedIn } = useAuth(); // 로그인 여부 확인
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(true);
  const togglePlayModal = () => {
    setIsPlayModalOpen((prev) => !prev); // 이전 상태값을 토글
  };
  return (
    <>
      <RouterProvider router={root} />
      {loggedIn &&
        createPortal(
          isPlayModalOpen ? (
            <PlayModal togglePlayModal={togglePlayModal} />
          ) : (
            <PlayModalFull togglePlayModal={togglePlayModal} />
          ),
          document.body
        )}
    </>
  );
}

export default App;
