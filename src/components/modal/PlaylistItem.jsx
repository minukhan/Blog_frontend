import { useState } from "react";
import * as S from "../../styles/modal/PlaylistItem.style";
function PlaylistItem() {
  const deletePlaylistItem = () => {
    //todo
  };
  return (
    <S.ItemContainer>
      {/* <S.Thumbnail /> */}
      <S.ThumbnailContainer>
        <S.Thumbnail src="/images/thumbnail.png" />
        <S.Icon className="icon">🔍</S.Icon>{" "}
      </S.ThumbnailContainer>

      <S.InfoWrapper>
        <S.Title>틈새에서 나만의 플레이리스트 만들기</S.Title>
        <S.Author>username</S.Author>
        <S.Duration>3:12</S.Duration>
      </S.InfoWrapper>
      <S.DeleteIcon onClick={deletePlaylistItem} />
    </S.ItemContainer>
  );
}

export default PlaylistItem;
