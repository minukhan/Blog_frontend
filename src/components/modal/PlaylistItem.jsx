import { useState } from "react";
import * as S from "../../styles/modal/PlaylistItem.style";
import axios from "axios";

function PlaylistItem({ playlist, onDelete }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePlaylistItem = async () => {
    const userId = 3; // 실제 userId로 대체
    setLoading(true); // 로딩 상태로 전환
    try {
      // 삭제 API 호출
      const response = await axios.delete(
        `http://localhost:8080/api/playlists/${userId}/${playlist.id}`
      );

      // 삭제가 성공하면 부모 컴포넌트에 알리기
      onDelete(playlist.id);
      console.log(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // 로딩 완료
    }
  };

  return (
    <S.ItemContainer>
      <S.ThumbnailContainer>
        <S.Thumbnail src="/images/thumbnail.png" />
        <S.Icon className="icon">🔍</S.Icon>
      </S.ThumbnailContainer>
      <S.InfoWrapper>
        <S.Title>{playlist.title}</S.Title> {/* playlist의 제목을 표시 */}
        <S.Author>{playlist.nickName}</S.Author> {/* playlist 작성자 표시 */}
        <S.Duration>{playlist.duration}</S.Duration> {/* 재생 시간 표시 */}
      </S.InfoWrapper>
      {loading ? (
        <p>Deleting...</p> // 삭제 중일 때 로딩 메시지 표시
      ) : (
        <S.DeleteIcon onClick={deletePlaylistItem} />
      )}
      {error && <p>Error: {error}</p>} {/* 에러 발생 시 메시지 표시 */}
    </S.ItemContainer>
  );
}

export default PlaylistItem;
