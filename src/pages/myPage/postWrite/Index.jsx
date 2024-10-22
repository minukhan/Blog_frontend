import { TextArea } from "@radix-ui/themes";
import React, { useState } from "react";
import styled from "styled-components";
import { StyledBtn } from "../../../styles/commonStyled";

function PostWritePage() {
  const [selectedThumbImg, setSelectedThumbImg] = useState(
    "/images/postWrite_thumbPreview.png"
  );
  const [thumbFile, setThumbFile] = useState(null);

  const handleSelectedThumbImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedThumbImg(imageUrl);

      setThumbFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /** 썸네일 이미지 */
    const formData = new FormData();

    if (thumbFile) {
      formData.append("image", thumbFile); // 실제 파일 데이터를 추가
    }

    try {
      // axios
      // console.log("S3 Image URL:", response.data.url); // 서버에서 받은 S3 URL
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrap>
      <InfoWrap>
        <Right>
          <Box>
            <Text>
              <img src="/images/postWrite_title.png" />
              게시글 제목
            </Text>
            <div style={{ marginLeft: "50px" }}>
              <StyledTextArea placeholder="제목을 입력해주세요" />
            </div>
          </Box>
          <Box>
            <Text>
              <img src="/images/postWrite_desc.png" />
              게시글 한줄 요약
            </Text>
            <div style={{ marginLeft: "50px" }}>
              <StyledTextArea placeholder="한줄 요약을 입력해주세요" />
            </div>
          </Box>
        </Right>

        {/* 썸네일 등록 */}
        <Left>
          <Box>
            <ThumbWrap>
              <div>
                <Text>
                  <img src="/images/postWrite_thumb.png" />
                  썸네일
                </Text>
                <p style={{ margin: "0 0 40px 50px" }}>썸네일을 등록해주세요</p>

                <InputWrap>
                  <input
                    type="file"
                    id="fileUpload"
                    onChange={handleSelectedThumbImg}
                  />
                  <label htmlFor="fileUpload">이미지 등록</label>
                </InputWrap>
              </div>
              <ImgPreviewWrap>
                <img src={selectedThumbImg} alt="preview" />
              </ImgPreviewWrap>
            </ThumbWrap>
          </Box>
        </Left>
      </InfoWrap>

      <EditorWrap></EditorWrap>

      <StyledBtn onClick={handleSubmit}>등록</StyledBtn>
    </Wrap>
  );
}

export default PostWritePage;

const Wrap = styled.div`
  background-color: red;
  width: 1118px;
  padding: 50px;
  border-radius: 30px;
  background: var(--light-gray);
  box-shadow: 13px 13px 25px #c3c3c3, -13px -13px 25px #fdfdfd;
`;

const InfoWrap = styled.div`
  display: flex;
  gap: 15px;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Left = styled.div`
  width: 50%;
`;
const Box = styled.div`
  background-color: white;
  padding: 13px;
  border-radius: 16px;

  p {
    color: gray;
    font-size: 14px;
  }
`;
const Text = styled.div`
  display: flex;
  gap: 5px;
`;
const StyledTextArea = styled(TextArea)`
  border: none;
  outline: none;
  box-shadow: none;
`;

const InputWrap = styled.div`
  input[type="file"] {
    display: none;
  }

  label {
    padding: 10px 20px;
    background: var(--light-gray);
    box-shadow: 13px 13px 25px #c3c3c3, -13px -13px 25px #fdfdfd;

    border-radius: 98px;
    cursor: pointer;

    color: black;
  }

  label:hover {
    background: white;
    box-shadow: inset 0 -5px 5px rgba(0, 0, 0, 0.3),
      /* 아래 */ inset -6px 0 3px rgba(0, 0, 0, 0.2),
      /* 오른쪽 */ 13px 13px 25px #c3c3c3; /* 외부 */
  }
`;

const ImgPreviewWrap = styled.div`
  width: 191px;
  height: 228px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ThumbWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const EditorWrap = styled.div``;
