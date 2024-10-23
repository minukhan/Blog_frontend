import React, { useState } from "react";
import * as SS from "../../styles/usersettings/settingsub.style";
import UserInputBar2 from "../../components/UserSettings/UserInputBar2";
import UserUpdateButton from "../../components/UserSettings/UserUpdateButton";
import { editUserSocialInfo } from "../../api/userSettingApi";

function UserSettingSubRight({
  uid,
  blogintro,
  github,
  instagram,
  twitter,
  setRefresh,
}) {
  const [newBlogIntro, setNewBlogIntro] = useState("");
  const [newGithub, setNewGithub] = useState("");
  const [newInstagram, setNewInstagram] = useState("");
  const [newTwitter, setNewTwitter] = useState("");

  const data = {
    intro: newBlogIntro,
    github: newGithub,
    insta: newInstagram,
    twitter: newTwitter,
  };

  const editUserInfo2 = () => {
    if (newBlogIntro == "") data.intro = blogintro;
    if (newGithub == "") data.github = github;
    if (newInstagram == "") data.insta = instagram;
    if (newTwitter == "") data.twitter = twitter;

    editUserSocialInfo(uid, data).then((res) => {
      console.log(res);
      if (res.isSuccess) {
        setRefresh((cur) => {
          return !cur;
        });
        alert("수정이 완료됐습니다.");
      } else {
        alert("수정 실패했습니다.");
      }
    });
    setNewBlogIntro("");
    setNewGithub("");
    setNewInstagram("");
    setNewTwitter("");
  };

  return (
    <SS.SettingSub>
      <div
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <SS.blogintro>Blog Intro</SS.blogintro>
          <input
            onChange={(e) => {
              setNewBlogIntro(e.target.value);
            }}
            value={newBlogIntro}
            style={{
              width: 300,
              height: 29,
              background: "#F4F4F4",
              boxShadow: "6px 6px 16px rgba(0, 0, 0, 0.15) inset",
              borderRadius: 54,
              border: "1px #FEFDFD solid",
            }}
          ></input>{" "}
        </div>
        <div style={{ width: 300, marginTop: 15 }}>
          <SS.sociallink style={{ marginBottom: "2px" }}>
            Social Link
          </SS.sociallink>
        </div>
        <div
          style={{
            width: 300,
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <UserInputBar2
            prop={newGithub}
            setProp={setNewGithub}
            inputName={"Github"}
          />
          <UserInputBar2
            prop={newInstagram}
            setProp={setNewInstagram}
            inputName={"Instagram"}
          />
          <UserInputBar2
            prop={newTwitter}
            setProp={setNewTwitter}
            inputName={"Twitter"}
          />
        </div>
        <UserUpdateButton func={editUserInfo2} />
      </div>
    </SS.SettingSub>
  );
}

export default UserSettingSubRight;
