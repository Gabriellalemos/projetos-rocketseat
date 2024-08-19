import styled from "styled-components";

export const TitleConteiner = styled.h1`
  color: ${(props) => props.theme["base-title"]};
  size: 48px;
  line-height: 130%;
  font-weight: 800;
`;

export const ItensContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 60px;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
