import React from "react";
import styled from "styled-components";
import UserSideBar from "../components/common/UserSideBar";
import { FaCaretDown } from "react-icons/fa";
import * as S from "../styles/home/home.style";

function MyPage() {
  return (
    <MainWrap>
      <UserSideBar />
      <PostMain>
        <SortToggleBar>
          Sort
          <FaCaretDown color="#000000" size={"30px"} />
        </SortToggleBar>
        <PostContainer>
          <S.Thumbnail src="/images/home/thumbnail.png" alt="Post Thumbnail" />
          <S.PostContent>
            <S.PostHeader>
              <S.Profile>
                <S.ProfileImage
                  src="/images/home/profileImage.png"
                  alt="Profile Image"
                />
                <S.ProfileTextWrap>
                  <S.UserName>Username</S.UserName>
                  <S.PostDate>3 days ago - 3:27</S.PostDate>
                </S.ProfileTextWrap>
              </S.Profile>
              <S.Icon />
            </S.PostHeader>
            <S.PostBody>
              <S.PostTitle>틈새에서 나만의 플레이리스트 만들기</S.PostTitle>
              <S.PostSummary>
                바쁜 일상 속 잠깐의 틈새에 당신의 목소리로 블로그를 들어보세요.
                나만의 플레이리스트를 완성하며, 원하는 순간마다 나만의 블로그
                콘텐츠를 감상해보세요. 우리 프로젝트는 사용자에게 음성 기반의
                맞춤형 블로그 청취 경험을 제공하며, 당신의 목소리로 특별한
                순간을 만들어 갑니다.
              </S.PostSummary>
              <S.PostCategory>기술</S.PostCategory>
            </S.PostBody>
          </S.PostContent>
        </PostContainer>
        <PostContainer>
          <S.Thumbnail src="/images/home/thumbnail.png" alt="Post Thumbnail" />
          <S.PostContent>
            <S.PostHeader>
              <S.Profile>
                <S.ProfileImage
                  src="/images/home/profileImage.png"
                  alt="Profile Image"
                />
                <S.ProfileTextWrap>
                  <S.UserName>Username</S.UserName>
                  <S.PostDate>3 days ago - 3:27</S.PostDate>
                </S.ProfileTextWrap>
              </S.Profile>
              <S.Icon />
            </S.PostHeader>
            <S.PostBody>
              <S.PostTitle>틈새에서 나만의 플레이리스트 만들기</S.PostTitle>
              <S.PostSummary>
                바쁜 일상 속 잠깐의 틈새에 당신의 목소리로 블로그를 들어보세요.
                나만의 플레이리스트를 완성하며, 원하는 순간마다 나만의 블로그
                콘텐츠를 감상해보세요. 우리 프로젝트는 사용자에게 음성 기반의
                맞춤형 블로그 청취 경험을 제공하며, 당신의 목소리로 특별한
                순간을 만들어 갑니다.
              </S.PostSummary>
              <S.PostCategory>기술</S.PostCategory>
            </S.PostBody>
          </S.PostContent>
        </PostContainer>
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
  height: 1248px;

  background: #ecf0f3;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  border-radius: 16px;
`;

export const PostContainer = styled.div`
  display: flex;
  justify-self: center;
  border-radius: 16px;
  box-shadow: 10px 10px 30px rgba(174, 174, 192, 0.4);
  width: 96%;
  margin-bottom: 20px;
`;

export const SortToggleBar = styled.div`
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
