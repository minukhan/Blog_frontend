import { TextArea } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledBtn } from "../../../styles/commonStyled";
import PostEditor from "./PostEditor";
import { POST_WRITE } from "../../../api/post";

function PostWritePage() {
  const [selectedThumbImg, setSelectedThumbImg] = useState(
    "/images/postWrite_thumbPreview.png"
  );
  const [thumbFile, setThumbFile] = useState(null);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [editorContent, setEditorContent] = useState("");

  // 기본 이미지를 파일로 변환하는 함수
  const urlToFile = async (url, filename, mimeType) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], filename, { type: mimeType });
  };

  useEffect(() => {
    // 페이지 로드 시 기본 이미지를 파일로 변환해서 thumbFile로 설정
    const convertUrlToFile = async () => {
      const file = await urlToFile(
        "/images/postWrite_thumbPreview.png",
        "postWrite_thumbPreview.png",
        "image/png"
      );
      setThumbFile(file);
    };

    convertUrlToFile();
  }, []);

  //
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
    const plainText = editorContent.replace(/<[^>]*>/g, "");

    /** 썸네일 이미지 */
    const formData = new FormData();

    // thumbFile이 없을 경우 기본 이미지를 formData에 추가
    if (!thumbFile) {
      formData.append("thumbnailUrl", selectedThumbImg);
    } else {
      formData.append("thumbnailUrl", thumbFile);
    }

    formData.append("postTitle", title);
    formData.append("postSummary", summary);
    formData.append("postContent", editorContent);
    formData.append("postCategory", "tech");
    formData.append("plainText", plainText);
    formData.append("userId", 1);

    // 확인용: formData 내용 출력
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    POST_WRITE(formData)
      .then((data) => {
        console.log("postId", data);
      })
      .catch((error) => {
        console.log(error);
      });
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
              <StyledTextArea
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </Box>
          <Box>
            <Text>
              <img src="/images/postWrite_desc.png" />
              게시글 한줄 요약
            </Text>
            <div style={{ marginLeft: "50px" }}>
              <StyledTextArea
                placeholder="한줄 요약을 입력해주세요"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
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

      <EditorWrap>
        <PostEditor setContent={setEditorContent} />
      </EditorWrap>

      <BtnWrap>
        <StyledBtn onClick={handleSubmit}>등록</StyledBtn>
      </BtnWrap>
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

  display: flex;
  flex-direction: column;
  gap: 15px;
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
const StyledTextArea = styled.textarea`
  border: none;
  width: 100%;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  resize: none;
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
const BtnWrap = styled.div`
  display: flex;
  justify-content: end;
`;
