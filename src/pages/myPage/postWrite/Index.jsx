import { TextArea } from "@radix-ui/themes";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { StyledBtn } from "../../../styles/commonStyled";
import PostEditor from "./PostEditor";
import { POST_WRITE } from "../../../api/post";
import { useSelect } from "./../../../hooks/useSelect";

function PostWritePage() {
  const [selectedThumbImg, setSelectedThumbImg] = useState(
    "/images/postWrite_thumbPreview.png"
  );
  const [thumbFile, setThumbFile] = useState(null);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const categoryRef = useRef();
  const { isOpen, selectedOption, toggleDropdown, selectOption } =
    useSelect("카테고리");

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
      <DropdownWrapper>
        <CustomSelect
          type="text"
          readOnly
          ref={categoryRef}
          value={selectedOption}
          onClick={toggleDropdown}
        />
        {isOpen && (
          <Dropdown>
            <li onClick={() => selectOption("기술")}>기술</li>
            <li onClick={() => selectOption("음식")}>음식</li>
            <li onClick={() => selectOption("여행")}>여행</li>
            <li onClick={() => selectOption("반려동물")}>반려동물</li>
            <li onClick={() => selectOption("뉴스")}>뉴스</li>
            <li onClick={() => selectOption("영화")}>영화</li>
            <li onClick={() => selectOption("연예")}>연예</li>
          </Dropdown>
        )}
      </DropdownWrapper>
      <InfoWrap>
        <Right>
          <Box_2>
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
          </Box_2>
          <Box_2>
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
          </Box_2>
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
                  <StyledBtn htmlFor="fileUpload">이미지 등록</StyledBtn>
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
  justify-content: space-between;
  gap: 15px;
  height: 254px;
`;
const Left = styled.div`
  width: 50%;
`;
const Box = styled.div`
  background-color: white;
  padding: 13px;
  border-radius: var(--border-radius);

  p {
    color: gray;
    font-size: 14px;
  }
`;
const Box_2 = styled.div`
  background-color: white;
  padding: 13px;
  border-radius: var(--border-radius);
  height: 50%;

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

const CustomSelect = styled.input`
  cursor: pointer;
  font-size: 13px;
  height: 29.6px;
  border: 1px solid #ccc;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.15) inset;

  background: var(--light-gray)
    url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3E%3Cpath d=%27M8 12l-4-4h8z%27/%3E%3C/svg%3E")
    no-repeat right 10px center;
  background-size: 15px;

  padding: 6px 10px;
  width: 200px;

  border-radius: 54px;
  color: black;
  box-sizing: border-box;
  appearance: none;

  &:focus {
    outline: none;
    border: 1px solid #ccc;
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;
export const Dropdown = styled.ul`
  position: absolute;
  top: 30px;
  left: 130px;
  border-radius: var(--border-radius);
  background-color: var(--light-gray);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1),
    3px 3px 10px rgba(255, 255, 255, 0.8) inset;
  list-style: none;
  padding: 5px 0;
  margin: 0;
  width: 70px;

  li {
    font-size: 12px;
    padding: 10px;
    cursor: pointer;
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 80%;
      height: 1px;
      background-color: #999999;
      position: absolute;
      bottom: 3px; // 아래쪽 위치
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;
