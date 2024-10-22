import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { StyledBtn } from "../../styles/commonStyled";
import { Link } from "react-router-dom";

const user = {
  img: "/images/myPageProfile.png",
  nickname: "하니",
  desc: "Senior Developer",
  github: "https://example.com",
  insta: "https://example.com",
  twitter: "https://example.com",
};

function UserSideBar() {
  return (
    <Wrap>
      <ProfileWrap>
        <ProfileImg>
          <img src={user.img} alt={user.name} />
        </ProfileImg>

        <p style={{ fontWeight: "700", paddingTop: "15px" }}>{user.nickname}</p>
        <p>{user.desc}</p>

        <SocialWrap>
          <a href={user.github} target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ fontSize: "25px" }} />
          </a>
          <a href={user.github} target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ fontSize: "25px" }} />
          </a>
          <a href={user.github} target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare style={{ fontSize: "25px" }} />
          </a>
        </SocialWrap>
        <div style={{ marginTop: "30px" }}>
          <StyledBtn>새 글 작성</StyledBtn>
        </div>
      </ProfileWrap>

      <CategoryWrap>
        <h2>CATEGORY</h2>
        <Category>
          <Link>카테고리1</Link>
          <Link>카테고리2</Link>
          <Link>카테고리3</Link>
          <Link>카테고리4</Link>
          <Link>카테고리5</Link>
          <Link>카테고리6</Link>
          <Link>카테고리7</Link>
        </Category>
      </CategoryWrap>
    </Wrap>
  );
}

export default UserSideBar;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 130px;
  min-width: 342px;
  height: 736px;
  border-radius: 30px;
  background: var(--light-gray);
  box-shadow: 13px 13px 25px #c3c3c3, -13px -13px 25px #fdfdfd;
`;
const ProfileWrap = styled.div`
  width: 100%;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  p {
    letter-spacing: 1.5;
  }
`;
const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 6.875rem;
  background-color: white;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #ccc;
  }
`;
const SocialWrap = styled.div`
  display: flex;
  gap: 5px;
  padding-top: 10px;
`;

const CategoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  h2 {
    margin-left: 20px;
    font-size: 18px;
    font-weight: 500;
    padding: 0 6px 0 6px;
    border-bottom: 3px solid black;
  }
`;

const Category = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4px;
  a {
    padding-right: 40px;
  }
`;
