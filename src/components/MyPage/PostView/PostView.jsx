import { useNavigate, useParams } from "react-router-dom";
import * as S from "../../../styles/mypage/PostView.style";
import { useEffect, useRef, useState } from "react";
import { POST_READ, POST_REMOVE } from "../../../api/post";

function PostView() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [onPlay, setOnPlay] = useState(false);
  const audioRef = useRef(null);
  const userId = window.localStorage.getItem("userId");

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
      POST_REMOVE(postId);
      navigate("/mypage");
    } else {
      console.log("Post not deleted");
    }
  };

  const postdate = new Date(postObject.createdAt);
  useEffect(() => {
    POST_READ(postId).then((res) => {
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
  }, [postId]);

  const togglePlay = () => {
    if (onPlay) {
      audioRef.current.pause(); // 오디오 일시정지
    } else {
      audioRef.current.play(); // 오디오 재생
    }
    setOnPlay(!onPlay);
  };

  return (
    <>
      <S.PostHeader>
        <S.IconWrapper>
          <div onClick={togglePlay}>
            {onPlay ? <S.PauseIcon /> : <S.PlayIcon />}
          </div>
          <S.AddIcon />
        </S.IconWrapper>
        <S.PostCategory>{postObject.postCategory}</S.PostCategory>
      </S.PostHeader>
      <S.PostTitle>{postObject.postTitle}</S.PostTitle>
      <S.PostMeta>{postdate.toLocaleString()}</S.PostMeta>
      <S.PostContent>
        <S.PostContentHeader>
          <S.Thumbnail src={postObject.thumbnailUrl} alt="Post Thumbnail" />
          <S.SummaryWrap>
            <S.SummaryTitle>요 약</S.SummaryTitle>
            <S.Summary>{postObject.postSummary}</S.Summary>
          </S.SummaryWrap>
        </S.PostContentHeader>
        {/* <S.TextPlaceholder>{postObject.postContent}</S.TextPlaceholder> */}
        <S.TextPlaceholder
          dangerouslySetInnerHTML={{ __html: postObject.postContent }}
        />
      </S.PostContent>

      {/* 오디오 요소 추가 */}
      {postObject.audioUrl && (
        <audio
          ref={audioRef}
          src={postObject.audioUrl}
          onEnded={() => setOnPlay(false)}
        />
      )}

      <S.PostButtonWrap>
        {postObject.userId == userId && (
          <>
            <S.Btn onClick={handleEdit}>수정</S.Btn>
            <S.Btn onClick={handleDelete}>삭제</S.Btn>
          </>
        )}
      </S.PostButtonWrap>
    </>
  );
}

export default PostView;
