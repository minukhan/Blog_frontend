import { Button } from "@radix-ui/themes";
import styled from "styled-components";

export const StyledBtn = styled(Button)`
  background: var(--light-gray);
  box-shadow: 13px 13px 25px #c3c3c3, -13px -13px 25px #fdfdfd;

  border-radius: 98px;
  cursor: pointer;

  color: black;

  &:active {
    background: white;
    box-shadow: inset 0 -5px 5px rgba(0, 0, 0, 0.3),
      /* 아래 */ inset -6px 0 3px rgba(0, 0, 0, 0.2),
      /* 오른쪽 */ 13px 13px 25px #c3c3c3; /* 외부 */
  }
`;
