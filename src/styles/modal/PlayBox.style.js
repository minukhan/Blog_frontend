import styled from "styled-components";
export const PlayBox = styled.div`
  border-radius: var(--border-radius);
  background-color: var(--light-gray);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--gray);
  text-align: center;
  margin-bottom: 30px;
`;

export const Thumbnail = styled.div`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  background-image: url("/images/thumbnail.png");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-shadow: var(--box-shadow);
  border: 5px solid white;
  margin-bottom: 20px;
`;
export const TextWrap = styled.div`
  margin: 0 auto;
  width: 255px;
`;
export const MainText = styled.h2`
  // todo : br태그 적절히 처리가능?
  font-size: 20px;
  color: var(--navy);
  text-align: center;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`;

export const SubText = styled.p`
  font-size: 13px;
  color: var(--gray);
  text-align: center;
  margin-bottom: 10px;
`;

export const VolumeIcon = styled.div`
  width: 15px;
  height: 15px;
  background-image: url("/images/svg/sound.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 40px;
`;
