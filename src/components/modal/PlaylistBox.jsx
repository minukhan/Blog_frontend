import PlaylistItem from "./PlaylistItem";
import * as S from "../../styles/modal/PlaylistBox.style";
function PlaylistBox() {
  return (
    <S.PlaylistBox>
      <S.Title>Playlist</S.Title>
      <S.ListContainer>
        <PlaylistItem />
        <PlaylistItem />
      </S.ListContainer>
    </S.PlaylistBox>
  );
}

export default PlaylistBox;
