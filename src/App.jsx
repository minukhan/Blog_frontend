import { RouterProvider } from "react-router-dom";
import root from "./router/root";

function App() {
<<<<<<< HEAD
  return <RouterProvider router={root} />;
=======
  const { loggedIn } = useAuth(); // 로그인 여부 확인
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(true);
  const togglePlayModal = () => {
    console.log("모달 전환 중...");
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
>>>>>>> 19628298489669a899bac11d9fdb71f38e339043
}

export default App;
