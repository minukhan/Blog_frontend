import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 20px 0 10px;
  font-size: 35px;
  font-weight: 500;
  color: var(--navy);
`;

export const ImgClock = styled.img`
  margin-top: 50px;
  width: 350px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 20px;
  color: var(--navy);
  margin-bottom: 80px;
`;
export const CategorySection = styled.div`
  display: flex;
  gap: 20px;
  align-self: flex-start;
  margin-bottom: 40px;
`;
export const CategoryButton = styled.button`
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 10px 20px;
  background-color: var(--light-gray);
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  color: var(--navy);

  &:hover {
    box-shadow: 10px 10px 10px rgba(174, 174, 192, 0.5) inset;
  }
`;

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PostContainer = styled.div`
  display: flex;
  border-radius: 16px;
  box-shadow: 10px 10px 30px rgba(174, 174, 192, 0.4);
  width: 100%;
  margin-bottom: 20px;
`;

export const Thumbnail = styled.img`
  width: 300px;
  border-radius: 8px 0 0 8px;
  object-fit: cover;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const ProfileTextWrap = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  justify-content: space-between;
`;
export const UserName = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 5px;
`;
export const PostDate = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: var(--gray);
`;

export const Icon = styled.div`
  margin-bottom: 10px;
  margin-right: -5px;
  width: 25px;
  height: 25px;
  background-image: url("/images/menuIcon.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const PostBody = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PostTitle = styled.h3`
  cursor: pointer;
  font-size: 35px;
  font-weight: 600;
  color: var(--navy);
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const PostSummary = styled.p`
  font-size: 12px;
  text-align: left;
  color: var(--black);
  line-height: 1.5;
  margin: 10px 0 0;
  // 2줄 넘어가면 말줄임표 ... 처리
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 15px;
`;
export const PostCategory = styled.button`
  border-radius: 16px;
  box-shadow: 10px 10px 10px rgba(174, 174, 192, 0.5) inset;
  padding: 8px 15px;
  background-color: var(--light-gray);
  border: none;
  font-size: 13px;
  font-weight: 400;
  color: var(--navy);
`;
