import { useState } from "react";
import * as S from "../../styles/modal/PlaylistItem.style";
import axios from "axios";

function PlaylistItem({ playlist, onSelect, onDelete }) {
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 플레이리스트 항목 삭제 함수
  const deletePlaylistItem = async () => {
    const userId = 1; // 실제 userId로 대체
    setLoading(true); // 로딩 상태로 전환
    try {
      // 삭제 API 호출
      await axios.delete(
        `http://localhost:8080/api/playlists/${userId}/${playlist.id}`
      );

      // 삭제가 성공하면 부모 컴포넌트에 알리기
      onDelete(playlist.id); // 부모 컴포넌트로 삭제된 항목의 ID 전달
    } catch (err) {
      setError(err.message); // 에러 메시지 업데이트
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  return (
    <S.ItemContainer>
      {/* 썸네일과 확대 아이콘 */}
      <S.ThumbnailContainer onClick={() => onSelect(playlist)}>
        <S.Thumbnail src={playlist.thumbnailUrl} alt={playlist.title} />
        <S.Icon className="icon">🔍</S.Icon>
      </S.ThumbnailContainer>

      {/* 플레이리스트 정보 (제목, 작성자 등) */}
      <S.InfoWrapper>
        <S.Title>{playlist.title}</S.Title> {/* playlist의 제목 */}
        <S.Author>{playlist.userName}</S.Author> {/* playlist 작성자 */}
        <S.Duration>Duration</S.Duration> {/* 임의로 Duration을 넣음 */}
      </S.InfoWrapper>

      {/* 삭제 중일 때는 로딩 메시지, 아니면 삭제 아이콘 표시 */}
      {loading ? (
        <p>Deleting...</p>
      ) : (
        <S.DeleteIcon onClick={deletePlaylistItem} />
      )}

      {/* 에러 메시지 표시 */}
      {error && <p>Error: {error}</p>}
    </S.ItemContainer>
  );
}

export default PlaylistItem;
