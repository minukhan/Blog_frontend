import { useEffect } from "react";
import * as S from "../../styles/home/PostItem.style";
import { useNavigate } from "react-router-dom";
import { userProfiles } from "../../data/userProfile";
// import { getRandomUserProfile, userProfiles } from "../../data/userProfile";
function PostItem({ post }) {
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(post);
  // }, []);

  // 포스트 제목 클릭 시 해당 경로로 이동하는 함수
  const handleTitleClick = () => {
    navigate(`/${post.postId}/post`);
  };

  // post prop 추가
  return (
    <S.PostContainer>
      <S.ThumbnailWrap>
        <S.Thumbnail
          src={post.thumbnailUrl || "/images/home/thumbnail.png"}
          alt="Post Thumbnail"
        />
      </S.ThumbnailWrap>

      <S.PostContent>
        <S.PostHeader>
          <S.Profile>
            <S.ProfileImage
              src={
                post.profileImage ||
                userProfiles[post.postId % 14].profileImage ||
                "/images/home/profileImage.png"
              }
              alt="Profile Image"
            />
            <S.ProfileTextWrap>
              <S.UserName>
                {post.userName || userProfiles[post.postId % 14].userName}
              </S.UserName>
              <S.PostDate>{post.createdAt || "3 days ago - 3:27"}</S.PostDate>
            </S.ProfileTextWrap>
          </S.Profile>
          <S.Icon />
        </S.PostHeader>
        <S.PostBody>
          <S.PostTitle onClick={handleTitleClick}>
            {post.postTitle || "틈새에서 나만의 플레이리스트 만들기"}
          </S.PostTitle>
          <S.PostSummary>
            {post.postSummary ||
              "바쁜 일상 속 잠깐의 틈새에 당신의 목소리로 블로그를 들어보세요. 나만의 플레이리스트를 완성하며, 원하는 순간마다 나만의 블로그 콘텐츠를 감상해보세요. 우리 프로젝트는 사용자에게 음성 기반의 맞춤형 블로그 청취 경험을 제공하며, 당신의 목소리로 특별한 순간을 만들어 갑니다."}
          </S.PostSummary>
          <S.PostCategory>{post.postCategory || "기술"}</S.PostCategory>
        </S.PostBody>
      </S.PostContent>
    </S.PostContainer>
  );
}

export default PostItem;
