import PlaylistItem from "./PlaylistItem";
import * as S from "../../styles/modal/PlaylistBox.style";

function PlaylistBox({ playlists, onSelect, onDelete }) {
  if (playlists && playlists.length > 0) {
    console.log("플레이리스트 아이디 조회: ", playlists[0].id);
  } else {
    console.log("플레이리스트가 존재하지 않습니다.");
  }

  return (
    <S.PlaylistBox>
      <S.Title>Playlist</S.Title>
      <S.ListContainer>
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <PlaylistItem
              key={playlist.id}
              playlist={playlist}
              onSelect={() => onSelect(playlist)}
              onDelete={onDelete} // onDelete를 PlaylistItem으로 전달
            />
          ))
        ) : (
          <p>No playlists available</p>
        )}
      </S.ListContainer>
    </S.PlaylistBox>
  );
}

export default PlaylistBox;
