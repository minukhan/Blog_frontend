import { useNavigate } from "react-router-dom";
import * as S from "../../styles/mypage/PostView.style";
function PostView() {
  const navigate = useNavigate();
  const postId = 1;
  const handleEdit = () => {
    navigate(`/edit/${postId}`); // todo
  };
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmDelete) {
      console.log("Post deleted");
      // todo 삭제 API를 호출
    } else {
      console.log("Post not deleted");
    }
  };

  return (
    <>
      <S.PostHeader>
        <S.IconWrapper>
          <S.PlayIcon />
          <S.AddIcon />
        </S.IconWrapper>
        <S.PostCategory>Food</S.PostCategory>
      </S.PostHeader>
      <S.PostTitle>틈새에서 나만의 플레이리스트 만들기</S.PostTitle>
      <S.PostMeta>3 days ago - 3:26</S.PostMeta>
      <S.PostContent>
        <S.PostContentHeader>
          <S.Thumbnail src="/images/home/thumbnail.png" alt="Post Thumbnail" />
          <S.SummaryWrap>
            <S.SummaryTitle>요 약</S.SummaryTitle>
            <S.Summary>
              저희 “틈새” 프로젝트는 블로그 플랫폼 구축을 목표로 하며, 차별화된
              핵심 기능은 TTS(텍스트 음성 변환)을 활용해 블로그 게시글을
              음성으로 읽어주는 것입니다.
            </S.Summary>
          </S.SummaryWrap>
        </S.PostContentHeader>
        <S.TextPlaceholder>
          저희 “틈새” 프로젝트는 블로그 플랫폼 구축을 목표로 하며, 차별화된 핵심
          기능은 TTS(텍스트 음성 변환)을 활용해 블로그 게시글을 음성으로
          읽어주는 것입니다. <br />
          <br />
          이때 그냥 TTS 기능이 아니라 사용자가 자신의 목소리를 모델링 해서
          등록할 수 있도록 하여, 작성한 게시글을 자신만의 목소리로 나레이션할 수
          있습니다. <br />
          <br />
          틈새에서는 내 목소리로 블로그를 들을 수 있습니다. 바쁜 일상 속
          틈새에서 나만의 플레이리스트를 완성해보는 건 어떤가요? 저희 “틈새”
          프로젝트는 블로그 플랫폼 구축을 목표로 하며, 차별화된 핵심 기능은
          TTS(텍스트 음성 변환)을 활용해 블로그 게시글을 음성으로 읽어주는
          것입니다. <br />
          <br />
          이때 그냥 TTS 기능이 아니라 사용자가 자신의 목소리를 모델링 해서
          등록할 수 있도록 하여, 작성한 게시글을 자신만의 목소리로 나레이션할 수
          있습니다. <br />
          <br />
          틈새에서는 내 목소리로 블로그를 들을 수 있습니다. 바쁜 일상 속
          틈새에서 나만의 플레이리스트를 완성해보는 건 어떤가요?
        </S.TextPlaceholder>
      </S.PostContent>

      <S.PostButtonWrap>
        <S.Btn onClick={handleEdit}>수정</S.Btn>
        <S.Btn onClick={handleDelete}>삭제</S.Btn>
      </S.PostButtonWrap>
    </>
  );
}

export default PostView;
