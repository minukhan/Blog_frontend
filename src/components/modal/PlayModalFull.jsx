import { useEffect, useState } from "react";
import * as S from "../../styles/modal/PlayModalFull.style";
import PlayBox from "./PlayBox";
import PlaylistBox from "./PlaylistBox";
import axios from "axios";

function PlayModalFull({ togglePlayModal }) {
  const [playlists, setPlaylists] = useState([]); // 플레이리스트 상태
  const [selectedPlaylist, setSelectedPlaylist] = useState(null); // 선택된 플레이리스트
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  const fetchPlaylists = async () => {
    const userId = window.localStorage.getItem("userId");
    console.log(userId);

    try {
      const response = await axios.get(
        `http://localhost:8080/api/playlists/${userId}`
      ); // userId로 API 호출
      setPlaylists(response.data); // 상태 업데이트
      setSelectedPlaylist(response.data[0]); // 첫 번째 항목을 기본값으로 설정
      setLoading(false); // 로딩 완료
    } catch (err) {
      setError(err.message); // 에러 발생 시 상태 업데이트
      setLoading(false); // 로딩 완료
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []); // 컴포넌트 마운트 시 한 번만 실행됨

  if (loading) return <div>Loading...</div>; // 로딩 중일 때 표시
  if (error) return <div>Error: {error}</div>; // 에러 발생 시 표시

  return (
    <>
      <S.ModalBackground onClick={togglePlayModal} />
      <S.PlayModalFullWrapper>
        {/* 선택된 플레이리스트를 PlayBox에 전달 */}
        {selectedPlaylist && <PlayBox playlists={selectedPlaylist} />}
        {/* PlaylistBox에 onSelect 함수를 전달하여 선택된 항목을 변경 */}
        <PlaylistBox playlists={playlists} onSelect={setSelectedPlaylist} />
      </S.PlayModalFullWrapper>
    </>
  );
}

export default PlayModalFull;
