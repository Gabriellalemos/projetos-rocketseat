import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;

export const TitleConteiner = styled.h3`
  color: ${(props) => props.theme["base-title"]};
  size: 18px;
  line-height: 130%;
  font-weight: bold;
`;
