import * as S from "../../styles/modal/PlayBox.style";

function SkeletonPlayBox() {
  return (
    <S.PlayBox>
      <S.SkeletonTitle />
      <S.SkeletonThumbnail />
      <S.TextWrap>
        <S.SkeletonMainText />
        <S.SkeletonSubText />
      </S.TextWrap>
      <S.SkeletonVolumeIcon />
      <S.SkeletonAudioPlayer />
    </S.PlayBox>
  );
}

export default SkeletonPlayBox;
