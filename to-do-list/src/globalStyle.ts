import styled from "styled-components";
import { gray600, gray700 } from "./constants/colors";

export const MainContainer = styled.div`
  height: 100vh;
  background-color: ${gray600};
`;

export const LogoContainer = styled.div`
  background-color: ${gray700};
  height: 200px;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: -23px;
  margin: auto;
  align-items: center;
  left: calc(50% - 736px / 2);
`;

export const TaskContainer = styled.div`
  position: relative;
  left: calc(50% - 736px / 2);
  text-align: center;
  width: 46rem;
`;
