import styled from "styled-components";

export const Container = styled.div`
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

export const SettingMain = styled.div`
  width: 955px;
  height: 736px;

  background: #ecf0f3;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  border-radius: 16px;
`;

export const SettingTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 35px;

  width: 898.07px;
  height: 76px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const SettingMainTitleText = styled.h1`
  padding: 0px 35px;
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 69px;

  color: #40565f;
`;

export const SettingMainTitleLine = styled.hr`
  width: 828.07px;
  height: 0px;
  border: 3px solid #40565f;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const SettingSubWrap = styled.div`
  margin-top: 50px;
  display: flex;
  padding: 0 35px;
  justify-content: space-evenly;
`;
