import { useNavigate } from "react-router-dom";
import * as S from "../../../styles/mypage/PostView.style";
import { useEffect, useState } from "react";
import { POST_READ } from "../../../api/post";
function PostView() {
  const navigate = useNavigate();
  const postId = 1;
  const [postObject, setPostObject] = useState({
    postId: 0,
    userId: 0,
    postTitle: "",
    postCategory: "",
    postContent: "",
    audioUrl: "",
    thumbnailUrl: "",
    postSummary: "",
    isDeleted: false,
    createdAt: "",
    updatedAt: "",
  });
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

  const postdate = () => {
    const pdate = new Date(postObject.createdAt);
    return (
      pdate.getFullYear() +
      "-" +
      (pdate.getMonth() + 1) +
      "-" +
      pdate.getDate() +
      " " +
      pdate.getHours() +
      ":" +
      pdate.getMinutes() +
      ":"
    );
  };
  useEffect(() => {
    POST_READ(postId).then((res) => {
      console.log(res);
      setPostObject((prev) => {
        return {
          ...prev,
          postId: res.postId,
          userId: res.userId,
          postTitle: res.postTitle,
          postCategory: res.postCategory,
          postContent: res.postContent,
          audioUrl: res.audioUrl,
          thumbnailUrl: res.thumbnailUrl,
          postSummary: res.postSummary,
          isDeleted: res.isDeleted,
          createdAt: res.createdAt,
          updatedAt: res.updatedAt,
        };
      });
    });
  }, [setPostObject]);

  return (
    <>
      <S.PostHeader>
        <S.IconWrapper>
          <S.PlayIcon />
          <S.AddIcon />
        </S.IconWrapper>
        <S.PostCategory>{postObject.postCategory}</S.PostCategory>
      </S.PostHeader>
      <S.PostTitle>{postObject.postTitle}</S.PostTitle>
      <S.PostMeta>
        {
          /* {postdate.getFullYear() +
          "-" +
          (postdate.getMonth() + 1) +
          "-" +
          postdate.getDate() +
          " "} */ postdate()
        }
      </S.PostMeta>
      <S.PostContent>
        <S.PostContentHeader>
          <S.Thumbnail src={postObject.thumbnailUrl} alt="Post Thumbnail" />
          <S.SummaryWrap>
            <S.SummaryTitle>요 약</S.SummaryTitle>
            <S.Summary>{postObject.postSummary}</S.Summary>
          </S.SummaryWrap>
        </S.PostContentHeader>
        <S.TextPlaceholder>{postObject.postContent}</S.TextPlaceholder>
      </S.PostContent>

      <S.PostButtonWrap>
        <S.Btn onClick={handleEdit}>수정</S.Btn>
        <S.Btn onClick={handleDelete}>삭제</S.Btn>
      </S.PostButtonWrap>
    </>
  );
}

export default PostView;
