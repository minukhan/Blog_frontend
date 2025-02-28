import { useEffect, useState } from "react";
import axios from "axios"; // axios 추가
import * as S from "../../styles/modal/PlayModal.style";

function PlayModal({ togglePlayModal }) {
  const [playlists, setPlaylists] = useState([]); // 플레이리스트 상태
  const [selectedPlaylist, setSelectedPlaylist] = useState(null); // 선택된 플레이리스트
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const [audioDuration, setAudioDuration] = useState(null);

  // 쿠키에서 특정 이름의 토큰 값을 가져오는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) return parts.pop().split(";").shift();
    return null; // 토큰이 없을 경우 null을 반환
  }

  const fetchPlaylists = async () => {
    const userId = window.localStorage.getItem("userId");
    const token = getCookie("accessToken");

    // 토큰이 없을 경우 early return 처리
    if (!token) {
      console.log("토큰이 없습니다. 모달을 표시하지 않습니다.");
      setLoading(false); // 로딩 상태도 false로 설정
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/api/playlists/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
          },
        }
      ); // userId로 API 호출

      console.log(response);

      // 서버에서 빈 배열이 올 수 있으므로 이를 처리
      if (response.data && response.data.length > 0) {
        setPlaylists(response.data); // 상태 업데이트
        setSelectedPlaylist(response.data[0]); // 첫 번째 항목을 기본값으로 설정
      } else {
        // 빈 배열일 경우 처리
        setPlaylists([]); // 빈 배열로 설정
        setSelectedPlaylist(null); // 선택된 플레이리스트도 null로 설정
      }

      setLoading(false); // 로딩 완료
    } catch (err) {
      setError(err.message); // 에러 발생 시 상태 업데이트
      setLoading(false); // 로딩 완료
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []); // 컴포넌트 마운트 시 한 번만 실행됨

  useEffect(() => {
    if (playlists.length > 0 && playlists[0]?.playlistId) {
      const duration = localStorage.getItem(
        `audioDuration_${playlists[0].playlistId}`
      );
      setAudioDuration(duration);
    }
  }, [playlists]);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // 현재 경로가 '/narration/register'일 경우 모달을 표시하지 않음
  const currentPath = window.location.pathname;
  if (currentPath === "/narration/register") {
    return null; // 경로가 '/narration/register'이면 모달을 렌더링하지 않음
  }

  // 토큰이 없을 경우 모달을 아예 표시하지 않음
  const token = getCookie("accessToken");
  if (!token) {
    return null; // 토큰이 없으면 모달을 렌더링하지 않음
  }

  // 로딩 중일 때
  if (loading) {
    return <p>Loading...</p>;
  }

  // 에러가 있을 경우
  if (error) {
    return <p>Error: {error}</p>;
  }

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <S.ModalWrapper onClick={togglePlayModal}>
      {/* 선택된 플레이리스트가 없어도 모달은 뜨고, 기본 로딩 표시 */}
      {selectedPlaylist ? (
        <>
          <S.Thumbnail src={selectedPlaylist.thumbnailUrl} />
          <S.InfoWrapper>
            <S.Title>{selectedPlaylist.title}</S.Title>
            <S.Author>{selectedPlaylist.userName}</S.Author>
          </S.InfoWrapper>
          <S.Duration>
            {audioDuration ? formatTime(audioDuration) : "Loading..."}
          </S.Duration>
          <S.IconWrapper onClick={togglePlayPause}>
            {isPlaying ? <S.PauseIcon /> : <S.PlayIcon />}
          </S.IconWrapper>
        </>
      ) : (
        <>
          <S.IconWrapper onClick={togglePlayPause}>
            {isPlaying ? <S.PauseIcon /> : <S.PlayIcon />}
          </S.IconWrapper>
          <p>플레이리스트가 없습니다.</p>
        </>
      )}
    </S.ModalWrapper>
  );
}

export default PlayModal;
