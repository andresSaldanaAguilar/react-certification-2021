import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.palette.dark};
    color: ${(props) => props.theme.fontColor};
}`;
