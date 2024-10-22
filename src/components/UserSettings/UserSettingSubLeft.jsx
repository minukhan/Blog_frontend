import React from "react";
import * as SS from "../../styles/usersettings/settingsub.style";
import UserInputBar from "../../components/UserSettings/UserInputBar";
import UserInputSelect from "../../components/UserSettings/UserInputSelect";
import UserUpdateButton from "../../components/UserSettings/UserUpdateButton";

function UserSettingSubLeft({ setVoiceSelect }) {
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
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <SS.profileImg src="/images/userBasicImg.png" />
          <SS.UploadButton>Upload new photo</SS.UploadButton>
        </div>
        <SS.bar style={{ marginBottom: "10px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <UserInputBar inputName={"Nickname"} />
          <UserInputSelect setVoiceSelect={setVoiceSelect} />
        </div>
        <UserUpdateButton />
      </div>
    </SS.SettingSub>
  );
}

export default UserSettingSubLeft;
