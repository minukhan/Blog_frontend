import * as S from "../../../styles/mypage/PostView.style"; // 기존 스타일을 재사용
function SkeletonPostView() {
  return (
    <>
      <S.PostHeader>
        <S.IconWrapper>
          <S.SkeletonIcon />
          <S.SkeletonIcon />
        </S.IconWrapper>
        <S.SkeletonCategory />
      </S.PostHeader>
      <S.SkeletonTitle />
      <S.SkeletonMeta />
      <S.PostContent>
        <S.PostContentHeader>
          <S.SkeletonThumbnail />
          <S.SummaryWrap>
            <S.SkeletonSummaryTitle />
            <S.SkeletonSummary />
          </S.SummaryWrap>
        </S.PostContentHeader>
        <S.SkeletonTextPlaceholder />
      </S.PostContent>
      <S.PostButtonWrap>
        <S.SkeletonButton />
        <S.SkeletonButton />
      </S.PostButtonWrap>
    </>
  );
}

export default SkeletonPostView;
