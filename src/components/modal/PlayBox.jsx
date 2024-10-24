import * as S from "../../styles/modal/PlayBox.style";
import AudioPlayer from "./AudioPlayer";
function PlayBox({ playlist }) {
  return (
    <S.PlayBox>
      <S.Title>Playing Now</S.Title>
      <S.Thumbnail />
      <S.TextWrap>
        <S.MainText>{playlist.title}</S.MainText>
        <S.SubText>{playlist.userName}</S.SubText>
      </S.TextWrap>
      <S.VolumeIcon />
      <AudioPlayer src="/audio/music.mp3" />
    </S.PlayBox>
  );
}

export default PlayBox;
