import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



body{
    background: ${(props) => props.theme["background"]};
    -webkit-font-smoothing: antialiased;
    font-family: 'Baloo 2', sans-serif;
    padding: 0 160px;

}



`;
