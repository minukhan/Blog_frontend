import styled from "styled-components";

export const SettingSub = styled.div`
  width: 331px;
  height: 397px;
  padding: 0 35px;
  position: relative;

  background: #ecf0f3;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  border-radius: 16px;
`;

export const profileImg = styled.img`
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  background: #f2f4f8;
  border-radius: 100px;
`;

export const UploadButton = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 140%;

  color: #697077;

  background: #ecf0f3;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  border-radius: 98px;
  border-style: none;

  width: 148px;
  height: 32.81px;
  cursor: pointer;
`;

export const bar = styled.hr`
  /* Line 8 */

  width: 334.02px;
  height: 0px;

  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const select = styled.button`
  box-sizing: border-box;

  width: 170px;
  height: 29px;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ecf0f3;
  box-shadow: 6px 2px 6.5px rgba(0, 0, 0, 0.15),
    inset -6px -6px 15px rgba(255, 255, 255, 0.78);
  border-radius: 54px;
  border-style: none;

  text-align: left;
  font-family: "Oxygen";
  cursor: pointer;
`;

export const blogintro = styled.p`
  /* Blog Intro */

  width: 76px;
  height: 17px;

  font-family: "Oxygen";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  color: rgba(64, 86, 95, 0.5);
`;

export const sociallink = styled.h1`
  /* Text */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;

  width: 87px;
  height: 29px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  /* Social Link */

  width: 87px;
  height: 27px;

  /* Zen Manrope - Title/18 */
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.014em;
  border-bottom: 3px solid #40565f;
  border-radius: 2px;

  color: #40565f;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const sociallinkline = styled.div`
  /* Vector 34 */

  width: 87px;
  height: 0px;

  border: 2px solid #40565f;
  border-radius: 2px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
