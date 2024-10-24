import { Button } from "@radix-ui/themes";
import styled from "styled-components";

export const StyledBtn = styled(Button)`
  padding: 10px 20px;
  background: var(--light-gray);
  box-shadow: 13px 13px 25px #c3c3c3, -13px -13px 25px #fdfdfd;
  padding: 10px 20px;

  border-radius: 98px;
  cursor: pointer;

  color: var(--navy);
  font-weight: 600;

  &:hover {
    background: var(--light-gray);
    box-shadow: 10px 10px 10px rgba(174, 174, 192, 0.5) inset;
  }
`;
