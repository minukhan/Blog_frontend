import { useEffect, useState } from "react";
import * as S from "../../styles/mypage/PostItem.style";
import { Link } from "react-router-dom";

function PostItem({ item, username }) {
  const changeTimestampToString = () => {
    let showDate;
    const currentTime = new Date();
    const postedTime = new Date(item.createdAt);
    let calTime =
      (currentTime.getTime() - postedTime.getTime()) / (1000 * 60 * 60 * 24);

    if (currentTime < postedTime) return "미래에서 온 포스트";

    if (Math.floor(calTime / 365) > 0) {
      let year = Math.floor(calTime / 365);
      showDate = year;
      if (year == 1) showDate += " year ago";
      else showDate += "years ago";
    } else if (Math.floor(calTime / 30) > 0) {
      let month = Math.floor(calTime / 30);
      showDate = month;
      if (month == 1) showDate += " month ago";
      else showDate += " months ago";
    } else if (Math.floor(calTime) >= 1) {
      if (Math.floor(calTime) == 1) showDate = "yesterday";
      else showDate = Math.floor(calTime) + " days ago";
    } else showDate = "today";

    return showDate;
  };

  useEffect(() => {
    //changeTimestampToString();
  }, [item.uid]);

  return (
    <S.PostContainer>
      <S.Thumbnail src="/images/home/thumbnail.png" alt="Post Thumbnail" />
      <S.PostContent>
        <S.PostHeader>
          <S.Profile>
            <S.ProfileImage src={item.thumbnailUrl} alt="Profile Image" />
            <S.ProfileTextWrap>
              <S.UserName>{username}</S.UserName>
              <S.PostDate>{changeTimestampToString()}</S.PostDate>
            </S.ProfileTextWrap>
          </S.Profile>
        </S.PostHeader>
        <S.PostBody>
          <S.PostTitle>
            <Link to={`/${item.postId}/post`}>{item.postTitle}</Link>
          </S.PostTitle>
          <S.PostSummary>{item.postSummary}</S.PostSummary>
          <S.PostCategory>{item.postCategory}</S.PostCategory>
        </S.PostBody>
      </S.PostContent>
    </S.PostContainer>
  );
}

export default PostItem;
