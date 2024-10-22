import { useState } from "react";
import * as S from "../../styles/modal/PlayModal.style";
function PlayModal({ togglePlayModal }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
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
