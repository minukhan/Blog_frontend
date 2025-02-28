import { useEffect, useState } from "react";
import * as S from "../../styles/modal/PlayBox.style";
import AudioPlayer from "./AudioPlayer";
import SkeletonPlayBox from "./SkeltonPlaybox";

function PlayBox({ playlists = {} }) {
  if (!playlists) {
    return <div>No playlist selected</div>; // 선택된 플레이리스트가 없을 때 처리
  }
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 1000); // 1초 후 로딩 해제
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <S.PlayBox>
      <S.Title>Playing Now</S.Title>
      <S.Thumbnail src={playlists.thumbnailUrl} alt="Playlist Thumbnail" />
      <S.TextWrap>
        <S.MainText>{playlists.title}</S.MainText>
        <S.SubText>{playlists.userName}</S.SubText>
      </S.TextWrap>
      <S.VolumeIcon />
      <AudioPlayer src={playlists.audioUrl} playlistId={playlists.playlistId} />
      {/* {isLoading ? (
        <SkeletonPlayBox /> // 로딩 중일 때 스켈레톤 표시
      ) : (
        <>
          <S.Title>Playing Now</S.Title>
          <S.Thumbnail src={playlists.thumbnailUrl} alt="Playlist Thumbnail" />
          <S.TextWrap>
            <S.MainText>{playlists.title}</S.MainText>
            <S.SubText>{playlists.userName}</S.SubText>
          </S.TextWrap>
          <S.VolumeIcon />
          <AudioPlayer
            src={playlists.audioUrl}
            playlistId={playlists.playlistId}
          />
        </>
      )} */}
    </S.PlayBox>
  );
}

export default PlayBox;
