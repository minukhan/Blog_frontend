import PlaylistItem from "./PlaylistItem";
import * as S from "../../styles/modal/PlaylistBox.style";

function PlaylistBox({ playlists, onSelect }) {
  return (
    <S.PlaylistBox>
      <S.Title>Playlist</S.Title>
      <S.ListContainer>
        {/* 플레이리스트 배열을 순회하면서 각 항목을 PlaylistItem으로 렌더링 */}
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <PlaylistItem
              key={playlist.id}
              playlist={playlist}
              onSelect={() => onSelect(playlist)} // 클릭 시 선택된 플레이리스트 전달
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
