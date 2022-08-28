import styled from "styled-components";
import { Button } from "@chakra-ui/react";

export const TextH1 = styled.h1`
  color: #fff;
  align-self: center;
  font-weight: bold;
  font-size: 38px;
`;
export const ButtonStylished = styled(Button)`
  background-color: #7879ba;
  margin-top: 15px;
  width: 60%;
  justify-content: flex-start;

  &:hover {
    background-color: #a5a6d1;
  }
`;
