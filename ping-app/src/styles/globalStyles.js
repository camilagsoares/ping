import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
::selection{
background-color: #141E28;
color: white;}

img{
-moz-user-select: none;
-webkit-user-select: none;
-ms-user-select: none;
user-select: none;
-webkit-user-drag: none;
-webkit-touch-callout: none;
}
}
`