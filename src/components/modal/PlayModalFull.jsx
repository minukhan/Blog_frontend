import * as S from "../../styles/modal/PlayModalFull.style";
import PlayBox from "./PlayBox";
import PlaylistBox from "./PlaylistBox";
function PlayModalFull({ togglePlayModal }) {
  return (
    <>
      <S.ModalBackground onClick={togglePlayModal} />
      <S.PlayModalFullWrapper>
        <PlayBox />
        <PlaylistBox />
      </S.PlayModalFullWrapper>
    </>
  );
}

export default PlayModalFull;
