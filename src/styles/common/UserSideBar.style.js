import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  min-width: 270px;
  padding: 30px 0px;
  border-radius: 30px;
  background: var(--light-gray);
  /* box-shadow: 13px 13px 25px #c3c3c3, -13px -13px 25px #fdfdfd; */
  box-shadow: 10px 10px 30px rgba(174, 174, 192, 0.6);
  height: 700px;
`;

export const ProfileWrap = styled.div`
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

export const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 6.875rem;
  background-color: white;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #ccc;
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 30px;
`;

export const CategoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 80%;
  h2 {
    margin-left: 20px;
    font-size: 18px;
    font-weight: 500;
    padding: 0 3px 0 3px;
    border-bottom: 2px solid black;
    margin-bottom: 15px;
  }
`;

export const Category = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
  a {
    padding-right: 40px;
  }
`;
