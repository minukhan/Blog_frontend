import React, { useRef } from "react";
import styled from "styled-components";
import * as Form from "@radix-ui/react-form";
import { StyledBtn } from "../../styles/commonStyled";

function InfoForm() {
  const nicknameRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      nickname: nicknameRef.current.value,
      desc: descRef.current.value,
      category: categoryRef.current.value,
    };

    console.log("입력된 값:", formData);
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
            <Select ref={categoryRef} required>
              <option value="ME">내 목소리</option>
              <option value="WOMAN">젊은 여성 목소리</option>
              <option value="MAN">중후한 남성 목소리</option>
            </Select>
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

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Select = styled.select`
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
