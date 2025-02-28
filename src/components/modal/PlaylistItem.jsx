import { useState, useEffect } from "react";
import * as S from "../../styles/modal/PlaylistItem.style";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function PlaylistItem({ playlist, onSelect, onDelete }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [audioDuration, setAudioDuration] = useState(null);

  // 로컬 스토리지에서 duration 가져오기
  useEffect(() => {
    const duration = localStorage.getItem(
      `audioDuration_${playlist.playlistId}`
    );
    setAudioDuration(duration);
  }, [playlist.playlistId]); // playlistId 변경 시에만 실행

  const deletePlaylistItem = async () => {
    const userId = window.localStorage.getItem("userId");
    const token = getCookie("accessToken");

    if (!token) {
      console.error("Access token not found in cookies");
      return;
    }

    setLoading(true);
    try {
      await axios.delete(
        `http://localhost:8080/api/playlists/${userId}/${playlist.playlistId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onDelete(playlist.playlistId);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <S.ItemContainer>
      <S.ThumbnailContainer onClick={() => onSelect(playlist)}>
        <S.Thumbnail src={playlist.thumbnailUrl} alt={playlist.title} />
        <S.Icon className="icon">
          <FaPlay style={{ color: "var(--light-gray)" }} />
        </S.Icon>
      </S.ThumbnailContainer>

      <S.InfoWrapper>
        <S.Title>{playlist.title}</S.Title>
        <S.Author>{playlist.userName}</S.Author>
        <S.Duration>
          {audioDuration ? formatTime(audioDuration) : "Loading..."}
        </S.Duration>
      </S.InfoWrapper>

      {loading ? (
        <p>Deleting...</p>
      ) : (
        <S.DeleteIcon onClick={deletePlaylistItem} />
      )}
      {error && <p>Error: {error}</p>}
    </S.ItemContainer>
  );
}

export default PlaylistItem;
