import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

export const theme = {
    sans:'Open sans',
    primary:"#513652",
    primaryDark:"#322233",
    primaryLight:"#9B399E",
    secondary:"#e30425",
    secondaryDark:"#2D524B",
    secondaryLight:"#5FAB9D",
    grey:"#E5E5E5",
    darkGrey:"#939393",
    offWhite:"#F4F4F4",
    tertiary:"#C2A64A",
    tertiaryDark:"#423E2D",
    tertiaryLight:"CCBD8B",
    black:"#202124",
    breakpoint:{
        w:["1000px","600px"],
        h:["700px"]
    }
  };


export const GlobalStyle = createGlobalStyle`
  html {
      box-sizing: border-box;
      font-size: 10px;
  }
  *, *:before, *:after {
      box-sizing: inherit;
  }
  body {

      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
      font-family: ${theme.sans};
      color:${theme.black};
      background:${theme.offWhite};
    }
`


export const MainContainer = styled.div`
    display:grid;
    height:100vh;
    grid-template-rows: auto 1fr; 
    max-height:100vh;
    /* min-height:400px; */
    grid-template-areas:
    "header"
    "main";
        

`


export const Header = styled.div`

    font-family:${props=>props.theme.sans};
    display:flex;
    
    grid-area:header;
    background:${props=>props.theme.primary};
    color:white;
    h1 {
        font-size: 1.2rem;
        font-weight:300;
        margin: auto auto auto 10px;
    }
    #menu-icon {
        font-size: 2rem;
        padding: 0px 10px;
        font-weight:400;
    }


`
