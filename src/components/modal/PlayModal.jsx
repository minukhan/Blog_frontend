import { useState } from "react";
import * as S from "../../styles/modal/PlayModal.style";
import { useDispatch, useSelector } from "react-redux";
function PlayModal() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { isPlayModalOpen } = useSelector((state) => state.modal);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  const dispatch = useDispatch();
  const togglePlayModal = () => {
    dispatch({ type: "TOGGLE_PLAY_MODAL" });
    console.log("togglePlayModal " + isPlayModalOpen);
  };
  return (
    <S.ModalWrapper onClick={togglePlayModal}>
      <S.Thumbnail />
      <S.InfoWrapper>
        <S.Title>틈새에서 나만의 플레이리스트 만들기</S.Title>
        <S.Author>username</S.Author>
      </S.InfoWrapper>
      <S.Duration>3:12</S.Duration>
      <S.IconWrapper onClick={togglePlayPause}>
        {isPlaying ? <S.PauseIcon /> : <S.PlayIcon />}
      </S.IconWrapper>
    </S.ModalWrapper>
  );
}

export default PlayModal;
