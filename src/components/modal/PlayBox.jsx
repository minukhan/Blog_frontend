import * as S from "../../styles/modal/PlayBox.style";
import AudioPlayer from "./AudioPlayer";
function PlayBox() {
  return (
    <S.PlayBox>
      <S.Title>Playing Now</S.Title>
      <S.Thumbnail />
      <S.TextWrap>
        <S.MainText>
          틈새에서 나만의 <br />
          플레이리스트 만들기
        </S.MainText>
        <S.SubText>softourr</S.SubText>
      </S.TextWrap>
      <S.VolumeIcon />
      {/* <S.PlayBar type="range" /> */}
      <AudioPlayer src="/audio/music.mp3" />
      {/* <S.ButtonGroup>
        <S.ControlButton>⏮️</S.ControlButton>
        <S.ControlButton>▶️</S.ControlButton>
        <S.ControlButton>⏭️</S.ControlButton>
      </S.ButtonGroup> */}
    </S.PlayBox>
  );
}

export default PlayBox;
