import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const user = {
  img: "/images/userBasicImg.png",
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
            <FaGithub style={{ fontSize: "25px", color: "#000000" }} />
          </a>
          <a href={user.github} target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ fontSize: "25px", color: "#000000" }} />
          </a>
          <a href={user.github} target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare style={{ fontSize: "25px", color: "#000000" }} />
          </a>
        </SocialWrap>
      </ProfileWrap>
      <hr
        style={{
          width: "250px",
          height: "0",
          border: "1px solid rgba(0, 0, 0, 0.3)",
          margin: "50px 0",
        }}
      />

      <AccountInfoWrap>
        <h2>Account Information</h2>
        <Category>
          <Link>My Playlist</Link>
          <Link>My Address</Link>
          <Link>Log out</Link>
        </Category>
      </AccountInfoWrap>
    </Wrap>
  );
}

export default UserSideBar;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  background-color: #f2f4f8;

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

const AccountInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 250px;

  h2 {
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 5px;
    margin-bottom: 25px;
    border-bottom: 3px solid black;
  }
`;

const Category = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  a {
    padding-right: 40px;
    margin: 25px 0;
    text-decoration: none;
    color: #000000;
  }
`;
