import styled from "styled-components";
import PostView from "./../../../components/MyPage/PostView/PostView";
import PostViewComment from "./../../../components/MyPage/PostView/PostViewComment";

function PostsViewPage() {
  return (
    <div>
      <PostContainer>
        <PostView />
        <PostViewComment />
      </PostContainer>
    </div>
  );
}

export default PostsViewPage;
const PostContainer = styled.div`
  margin: 0 auto;
  padding: 30px;
  background-color: var(--ligh-gray);
  border-radius: var(--border-radius);
  box-shadow: 10px 10px 30px rgba(174, 174, 192, 0.6);
  width: 800px;
`;
