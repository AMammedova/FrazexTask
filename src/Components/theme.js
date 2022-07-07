import { createGlobalStyle } from "styled-components";

export const lightTheme={
    body:"#fff",
    fontColor:"#000",
    
};
export const darkTheme={
    body:"#000",
    fontColor:'#fff',
};
export const GlobalStyles=createGlobalStyle`

body{
    background-color:${props=>props.theme.body};
    color:${props=>props.theme.fontColor}
}
.themebtn{
    background-color: #748DFF;
	border: 2px solid #fff;
	box-shadow: 0px 2px 5px rgba(116, 141, 255, 0.7);
	color: rgb(57, 55, 55);
    padding: 11px 30px;
    position:absolute;
    right:10px;
    top:2px;
  }

`