import React, { useRef } from "react";
import styled from "styled-components";
import * as Form from "@radix-ui/react-form";
import { StyledBtn } from "../../styles/commonStyled";
import { useSelect } from "../../hooks/useSelect";
import { POST_FORMSETTING } from "../../api/userSettingApi";
import { redirect } from "react-router-dom";

function InfoForm() {
  const nicknameRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();
  const { isOpen, selectedOption, toggleDropdown, selectOption } =
    useSelect("내 목소리");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      userNickname: nicknameRef.current.value,
      userDesc: descRef.current.value,
      voiceSelected: categoryRef.current.value,
    };

    POST_FORMSETTING(formData)
      .then((data) => {
        console.log("postId", data);
        redirect("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <FormRoot onSubmit={handleSubmit}>
        <FormField name="nickname">
          <FormLabel>닉네임</FormLabel>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Form.Control asChild>
              <Input type="text" ref={nicknameRef} required />
            </Form.Control>
            <FormMessage match="valueMissing">
              닉네임을 입력해주세요
            </FormMessage>
          </div>
        </FormField>

        <FormField name="desc">
          <FormLabel>한줄 소개</FormLabel>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Form.Control asChild>
              <Input type="text" ref={descRef} required />
            </Form.Control>
            <FormMessage match="valueMissing">
              한줄 소개를 입력해주세요
            </FormMessage>
          </div>
        </FormField>

        {/* <FormField name="category">
          <FormLabel>카테고리</FormLabel>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Select ref={categoryRef} required>
              <option value="ME">내 목소리</option>
              <option value="WOMAN">젊은 여성 목소리</option>
              <option value="MAN">중후한 남성 목소리</option>
            </Select>
          </div>
        </FormField> */}

        <FormField name="category">
          <FormLabel>카테고리</FormLabel>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
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
                  <li onClick={() => selectOption("내 목소리")}>내 목소리</li>
                  <li onClick={() => selectOption("젊은 여성 목소리")}>
                    젊은 여성 목소리
                  </li>
                  <li onClick={() => selectOption("중후한 남성 목소리")}>
                    중후한 남성 목소리
                  </li>
                </Dropdown>
              )}
            </DropdownWrapper>
          </div>
        </FormField>

        <Form.Submit asChild>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <StyledBtn>등록</StyledBtn>
          </div>
        </Form.Submit>
      </FormRoot>
    </div>
  );
}

export default InfoForm;

const FormRoot = styled(Form.Root)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormField = styled(Form.Field)`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const FormLabel = styled(Form.Label)`
  font-size: 16px;
  font-weight: 500;
  width: 80px;
`;

const FormMessage = styled(Form.Message)`
  color: var(--red);
  font-size: 12px;
  display: block; /* 메시지를 다음 줄로 이동시킴 */
`;

const Input = styled.input`
  border: 1px solid #ccc;

  background: var(--light-gray);
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.15) inset;
  padding: 6px 10px;
  width: 200px;
  border-radius: 54px;
  box-sizing: border-box;

  color: black;

  &:focus {
    outline: none;
    border: 1px solid #ccc;
  }
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
  right: 0;
  border-radius: var(--border-radius);
  background-color: var(--light-gray);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1),
    3px 3px 10px rgba(255, 255, 255, 0.8) inset;
  list-style: none;
  padding: 5px 0;
  margin: 0;
  width: 130px;

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
