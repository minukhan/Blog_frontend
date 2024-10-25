import React, { useEffect, useState } from "react";
import * as S from "../styles/usersettings/setting.style";
import UserSettingsSideBar from "../components/UserSettings/UserSettingsSideBar";
import UserSettingSubLeft from "../components/UserSettings/UserSettingSubLeft";
import UserSettingSubRight from "../components/UserSettings/UserSettingSubRight";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../api/userSettingApi";

function UserSettings() {
  const { uid } = useParams();
  const [name, setName] = useState(null);
  const [voiceSelect, setVoiceSelect] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [blogintro, setBlogIntro] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getUserInfo(uid).then((res) => {
      setName(res.data.name);
      setVoiceSelect(res.data.voice);
      setProfileImg(res.data.profileImg);
      setBlogIntro(res.data.social.intro);
      setGithub(res.data.social.github);
      setInstagram(res.data.social.instagram);
      setTwitter(res.data.social.twitter);
    });
  }, [
    uid,
    name,
    voiceSelect,
    profileImg,
    blogintro,
    github,
    instagram,
    twitter,
    refresh,
  ]);

  return (
    <S.Container>
      <UserSettingsSideBar
        uid={uid}
        profileImg={profileImg}
        name={name}
        blogintro={blogintro}
        github={github}
        instagram={instagram}
        twitter={twitter}
        refresh={refresh}
      />
      <S.SettingMain>
        <div style={{ paddingTop: "35px" }}>
          <S.SettingTitleWrap>
            <S.SettingMainTitleText>Account Settings</S.SettingMainTitleText>
            <S.SettingMainTitleLine />
          </S.SettingTitleWrap>
          <S.SettingSubWrap>
            <UserSettingSubLeft
              uid={uid}
              profileImg={profileImg}
              name={name}
              voiceSelect={voiceSelect}
              doRefresh={setRefresh}
            />
            <UserSettingSubRight
              uid={uid}
              blogintro={blogintro}
              github={github}
              instagram={instagram}
              twitter={twitter}
              setRefresh={setRefresh}
            />
          </S.SettingSubWrap>
        </div>
      </S.SettingMain>
    </S.Container>
  );
}

export default UserSettings;
