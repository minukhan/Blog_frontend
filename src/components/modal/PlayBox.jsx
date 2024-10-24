import * as S from "../../styles/modal/PlayBox.style";
import AudioPlayer from "./AudioPlayer";

function PlayBox({ playlists }) {
  if (!playlists) {
    return <div>No playlist selected</div>; // 선택된 플레이리스트가 없을 때 처리
  }

  return (
    <S.PlayBox>
      <S.Title>Playing Now</S.Title>
      {/* 썸네일 이미지 */}
      <S.Thumbnail src={playlists.thumbnailUrl} alt="Playlist Thumbnail" />
      <S.TextWrap>
        {/* 플레이리스트 제목 */}
        <S.MainText>{playlists.title}</S.MainText>
        {/* 플레이리스트를 업로드한 유저 이름 */}
        <S.SubText>{playlists.userName}</S.SubText>
      </S.TextWrap>
      {/* 볼륨 아이콘 */}
      <S.VolumeIcon />
      {/* 오디오 플레이어, playlistId 추가 */}
      <AudioPlayer src={playlists.audioUrl} playlistId={playlists.playlistId} />
    </S.PlayBox>
  );
}

export default PlayBox;
