import PlaylistItem from "./PlaylistItem";
import * as S from "../../styles/modal/PlaylistBox.style";
import { useEffect, useState } from "react";
import SkeletonPlaylistItem from "./SkeletonPlaylistItem";
import styled from "styled-components";
function PlaylistBox({ playlists, onSelect, onDelete }) {
  if (playlists && playlists.length > 0) {
    console.log("플레이리스트 아이디 조회: ", playlists[0].id);
  } else {
    console.log("플레이리스트가 존재하지 않습니다.");
  }

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.PlaylistBox>
      <S.Title>Playlist</S.Title>
      <S.ListContainer>
        {isLoading ? (
          // 로딩 중일 때 스켈레톤 5개 표시
          Array.from({ length: 5 }).map((_, index) => (
            <SkeletonPlaylistItem key={index} />
          ))
        ) : playlists.length > 0 ? (
          // 로딩 완료 후, playlists가 있으면 PlaylistItem 렌더링
          playlists.map((playlist) => (
            <PlaylistItem
              key={playlist.id}
              playlist={playlist}
              onSelect={() => onSelect(playlist)}
              onDelete={onDelete} // onDelete를 PlaylistItem으로 전달
            />
          ))
        ) : (
          // playlists가 비어있을 때 메시지 표시
          <NoDataWrap>
            <p>No playlists available</p>
          </NoDataWrap>
        )}
      </S.ListContainer>
    </S.PlaylistBox>
  );
}

export default PlaylistBox;

const NoDataWrap = styled.div`
  width: 277px;
  display: flex;
  justify-content: center;
`;
