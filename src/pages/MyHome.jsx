import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserSideBar from "../components/common/UserSideBar";
import { FaCaretDown } from "react-icons/fa";
import PostItem from "../components/MyPage/PostItem";
import {
  getPostByUserId,
  getUserInfo,
  getUserPostsByCategory,
} from "../api/myHomeApi";
import { useParams } from "react-router-dom";

function MyPage() {
  const uid = 1;
  const { categoryName } = useParams();
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
    console.log(categoryName);
    // 유저 정보는 공통이므로 항상 요청
    getUserInfo(uid).then((res) => {
      console.log(res);
      setUser(res.data);
    });

    // categoryName에 따라 요청 분기
    if (categoryName) {
      console.log("Fetching posts by category:", categoryName);
      getUserPostsByCategory(uid, categoryName).then((res) => {
        setPosts(res ? res : []); // 카테고리별 게시물 설정
      });
    } else {
      console.log("Fetching all posts for user");
      getPostByUserId(uid).then((res) => {
        setPosts(res ? res : []); // 모든 게시물 설정
      });
    }
  }, [categoryName, uid]);

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
  /* padding: 200px 0; */
  padding-top: 20px;
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
