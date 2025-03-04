import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { deleteUserInfo } from "../../api/userSettingApi";
import AlertModal from "../common/AlertModal";

const user = {
  img: "",
  name: "",
  desc: "",
  github: "",
  insta: "",
  twitter: "",
};

function UserSideBar({
  uid,
  profileImg,
  name,
  blogintro,
  github,
  instagram,
  twitter,
  refresh,
}) {
  const [data, setData] = useState(user);
  const navigate = useNavigate();
  const localProfileImg = localStorage.getItem("userProfileImage");

  useEffect(() => {
    setData((cur) => {
      const newData = { ...cur };
      (newData.img = profileImg),
        (newData.name = name),
        (newData.desc = blogintro),
        (newData.github = github),
        (newData.insta = instagram),
        (newData.twitter = twitter);
      return newData;
    });
    console.log("ref됨");
    console.log(data);
  }, [profileImg, name, blogintro, github, instagram, twitter, uid, refresh]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const deleteAccount = () => {
    // if (confirm("회원 탈퇴를 하시겠습니까?")) {
    //   deleteUserInfo(uid);
    //   handleOpenAlert();
    //   navigate("/");
    // }
    deleteUserInfo(uid);
    handleOpenAlert();
    // navigate("/");
  };
  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleOkAlert = () => {
    setIsAlertOpen(false);
    navigate("/");
  };
  const handleCancelAlert = () => {
    setIsAlertOpen(false);
  };

  const deleteCookie = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };
  const handleLogout = () => {
    // accessToken 쿠키 삭제
    deleteCookie("accessToken");
    window.location.href = "/";
  };

  return (
    <Wrap>
      {isAlertOpen && (
        <AlertModal
          message="회원 탈퇴를 하시겠습니까?"
          onOk={handleOkAlert}
          onCancel={handleCancelAlert}
        />
      )}
      <ProfileWrap>
        <ProfileImg>
          <img
            src={data.img || localProfileImg || "./images/userBasicImg.png"}
            alt={""}
          />
        </ProfileImg>

        <p style={{ fontWeight: "700", paddingTop: "15px" }}>{data.name}</p>
        <p>{data.desc}</p>

        <SocialWrap>
          <a href={data.github} target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ fontSize: "25px", color: "#000000" }} />
          </a>
          <a href={data.insta} target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ fontSize: "25px", color: "#000000" }} />
          </a>
          <a href={data.twitter} target="_blank" rel="noopener noreferrer">
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
        <Category>
          <h2 style={{ cursor: "pointer", marginLeft: "-5px" }}>
            Account Information
          </h2>
          <p style={{ cursor: "pointer" }} onClick={handleLogout}>
            Logout
          </p>
          <p
            style={{ color: "#cc0000", cursor: "pointer" }}
            onClick={() => deleteAccount()}
          >
            Delete Account
          </p>
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
  width: 270px;
  border-radius: 30px;
  background: var(--light-gray);
  /* box-shadow: 13px 13px 25px #c3c3c3, -13px -13px 25px #fdfdfd; */
  box-shadow: 10px 10px 30px rgba(174, 174, 192, 0.6);
  height: 700px;
`;
const ProfileWrap = styled.div`
  width: 100%;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: -110px;

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
  gap: 15px;
  padding-top: 30px;
`;

const AccountInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 70%;

  h2 {
    margin-left: 20px;
    font-size: 18px;
    font-weight: 500;
    padding: 0 3px 0 3px;
    border-bottom: 2px solid black;
    margin-bottom: 15px;
  }
`;

const Category = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    padding-right: 40px;
    margin: 25px 0;
    text-decoration: none;
    color: #000000;
  }
`;
