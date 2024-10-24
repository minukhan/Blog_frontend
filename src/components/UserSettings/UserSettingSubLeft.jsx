import React, { useEffect, useState } from "react";
import * as SS from "../../styles/usersettings/settingsub.style";
import UserInputBar from "../../components/UserSettings/UserInputBar";
import UserInputSelect from "../../components/UserSettings/UserInputSelect";
import UserUpdateButton from "../../components/UserSettings/UserUpdateButton";
import { editUserInfo } from "../../api/userSettingApi";

function UserSettingSubLeft({ uid, profileImg, name, voiceSelect, doRefresh }) {
  const [newName, setNewName] = useState("");
  const [newVoiceSelect, SetNewVoiceSelect] = useState(voiceSelect);

  useEffect(() => {
    SetNewVoiceSelect(voiceSelect);
  }, [voiceSelect, profileImg, uid]);

  const data = {
    name: newName,
    voiceSelect: newVoiceSelect,
  };

  const editUserInfo1 = () => {
    if (newName == "") {
      data.name = name;
    }
    editUserInfo(uid, data).then((res) => {
      console.log(res);
      if (res.isSuccess) {
        doRefresh((cur) => {
          return !cur;
        });
        alert("수정이 완료됐습니다.");
      } else {
        alert("수정 실패했습니다.");
      }
    });
    setNewName("");
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
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <SS.profileImg src={profileImg || "./images/userBasicImg.png"} />
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
          <UserInputBar
            newName={newName}
            setNewName={setNewName}
            inputName={"Nickname"}
          />
          <UserInputSelect
            voiceSelect={newVoiceSelect}
            setVoiceSelect={SetNewVoiceSelect}
          />
        </div>
        <UserUpdateButton func={editUserInfo1} />
      </div>
    </SS.SettingSub>
  );
}

export default UserSettingSubLeft;
