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
  height: 310px;
  width: 256px;
  border-radius: 8px 15%;
  padding: 16px;
`;

export const CardProductImage = styled.span`
  position: relative;
  top: -30px;
  height: 120px;
  width: 120px;
`;

export const TagContainer = styled.div`
  margin-top: -30px;
`;

export const CardProductTag = styled.span`
  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 16px;
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 2px 8px;
  font-size: x-small;
  font-weight: 600;
  margin: 2px;
`;

export const CardProductTitle = styled.h3`
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CardProductSubtitle = styled.span`
  color: ${(props) => props.theme["base-label"]};
  font-family: "Roboto";
  font-size: 14px;
  line-height: 130%;
  font-weight: 400;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
`;

export const CounterConteiner = styled.div``;

export const CounterButton = styled.button``;

export const CounterValue = styled.span``;

export const PriceWrapper = styled.div``;
