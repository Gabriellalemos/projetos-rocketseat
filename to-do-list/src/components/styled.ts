import styled from "styled-components";

import { gray100, gray400, gray500 } from "./../constants/colors";

export const TaskItem = styled.div`
  display: flex;
  background-color: ${gray500};
  padding: 16px;
  box-sizing: border-box;
  gap: 12px;
  border: 1px solid ${gray400};
  color: ${gray100};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  margin-bottom: 12px;
`;
