import React, { useState } from "react";
import * as S from "../styles/usersettings/setting.style";
import UserSettingsSideBar from "../components/UserSettings/UserSettingsSideBar";
import UserSettingSubLeft from "../components/UserSettings/UserSettingSubLeft";
import UserSettingSubRight from "../components/UserSettings/UserSettingSubRight";
import axios from "axios";

function userSettings() {
  const [nickname, setNickname] = useState("");
  const [voiceSelect, setVoiceSelect] = useState("");
  const [blogintro, setBlogIntro] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");

  //axios로 api에서 값 요청

  return (
    <S.Container>
      <UserSettingsSideBar />
      <S.SettingMain>
        <div style={{ paddingTop: "35px" }}>
          <S.SettingTitleWrap>
            <S.SettingMainTitleText>Account Settings</S.SettingMainTitleText>
            <S.SettingMainTitleLine />
          </S.SettingTitleWrap>
          <S.SettingSubWrap>
            <UserSettingSubLeft setVoiceSelect={setVoiceSelect} />
            <UserSettingSubRight />
          </S.SettingSubWrap>
        </div>
      </S.SettingMain>
    </S.Container>
  );
}

export default userSettings;
