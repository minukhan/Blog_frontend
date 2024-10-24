import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserSideBar from "../components/common/UserSideBar";
import { FaCaretDown } from "react-icons/fa";
import PostItem from "../components/MyPage/PostItem";
import { getPostByUserId, getUserInfo } from "../api/myHomeApi";

function MyPage() {
  const uid = 1;
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({
    name: "",
    profileImg: "",
    social: {
      github: "",
      instagram: "",
      twitter: "",
      intro: "",
    },
  });

  useEffect(() => {
    getPostByUserId(uid).then((res) => {
      console.log(res);
      setPosts(res);
    });
    getUserInfo(uid).then((res) => {
      console.log(res);
      setUser(res.data);
    });
    console.log(userName);
  }, [setPosts]);

  return (
    <MainWrap>
      <UserSideBar user={user} />
      <PostMain>
        <SortToggleBar>
          Sort
          <FaCaretDown color="#000000" size={"30px"} />
        </SortToggleBar>

        {posts.map((item, i) => {
          return <PostItem key={i} item={item} username={user.name} />;
        })}
      </PostMain>
    </MainWrap>
  );
}

export default MyPage;

const MainWrap = styled.div`
  width: 100%;
  min-width: 1500px;
  height: auto;
  margin: 0 auto;
  padding: 200px 0;
  display: flex;
  justify-content: center;
  gap: 30px;

  background: #ecf0f3;
`;

const PostMain = styled.div`
  /* Rectangle 1 */
  width: 955px;
  height: auto;
  min-height: 1248px;

  background: #ecf0f3;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  border-radius: 16px;
`;

const PostContainer = styled.div`
  display: flex;
  justify-self: center;
  border-radius: 16px;
  box-shadow: 10px 10px 30px rgba(174, 174, 192, 0.4);
  width: 96%;
  margin-bottom: 20px;
`;

const SortToggleBar = styled.div`
  position: relative;
  width: 180px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 35px 0 35px 35px;
  padding: 0 5px;

  background: #f0f0f3;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.79);
  border-radius: 5px;

  /* selected option */

  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 100%;
  letter-spacing: 0.01em;
  color: #40565f;
`;
