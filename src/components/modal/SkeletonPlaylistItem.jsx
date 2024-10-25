import * as S from "../../styles/modal/PlaylistItem.style";

function SkeletonPlaylistItem() {
  return (
    <S.ItemContainer>
      <S.SkeletonThumbnailContainer>
        <S.SkeletonThumbnail />
      </S.SkeletonThumbnailContainer>

      <S.InfoWrapper>
        <S.SkeletonTitle />
        <S.SkeletonAuthor />
        <S.SkeletonDuration />
      </S.InfoWrapper>

      <S.SkeletonDeleteIcon />
    </S.ItemContainer>
  );
}

export default SkeletonPlaylistItem;
