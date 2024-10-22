import React from "react";
import * as SS from "../../styles/usersettings/settingsub.style";
import UserInputBar2 from "../../components/UserSettings/UserInputBar2";
import UserUpdateButton from "../../components/UserSettings/UserUpdateButton";

function UserSettingSubRight() {
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
          <UserInputBar2 inputName={"Github"} />
          <UserInputBar2 inputName={"Instagram"} />
          <UserInputBar2 inputName={"Twitter"} />
        </div>
        <UserUpdateButton />
      </div>
    </SS.SettingSub>
  );
}

export default UserSettingSubRight;
