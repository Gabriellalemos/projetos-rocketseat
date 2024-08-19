import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 160px;
`;
export const CardContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const CardProductContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  margin: 8px;
  display: inline-block;
`;
