import { useDispatch } from "react-redux";
import * as S from "../../styles/modal/PlayModalFull.style";
import PlayBox from "./PlayBox";
import PlaylistBox from "./PlaylistBox";
function PlayModalFull() {
  const dispatch = useDispatch();
  const togglePlayModal = () => {
    dispatch({ type: "TOGGLE_PLAY_MODAL" });
  };
  return (
    <>
      <S.ModalBackground />
      <S.PlayModalFullWrapper onClick={() => togglePlayModal}>
        <PlayBox />
        <PlaylistBox />
      </S.PlayModalFullWrapper>
    </>
  );
}

export default PlayModalFull;
