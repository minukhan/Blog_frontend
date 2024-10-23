import React from "react";
import styled from "styled-components";
import * as Form from "@radix-ui/react-form";

function InfoForm() {
  return (
    <div>
      <FormRoot>
        <FormField name="email">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <FormLabel>Email</FormLabel>
            <FormMessage match="valueMissing">
              Please enter your email
            </FormMessage>
            <FormMessage match="typeMismatch">
              Please provide a valid email
            </FormMessage>
          </div>
          <Form.Control asChild>
            <Input type="email" required />
          </Form.Control>
        </FormField>

        <FormField name="question">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <FormLabel>Question</FormLabel>
            <FormMessage match="valueMissing">
              Please enter a question
            </FormMessage>
          </div>
          <Form.Control asChild>
            <Textarea required />
          </Form.Control>
        </FormField>

        <Form.Submit asChild>
          <Button>Post question</Button>
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
  flex-direction: column;
  gap: 8px;
`;

const FormLabel = styled(Form.Label)`
  font-size: 16px;
  font-weight: 500;
`;

const FormMessage = styled(Form.Message)`
  color: red;
  font-size: 12px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
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
