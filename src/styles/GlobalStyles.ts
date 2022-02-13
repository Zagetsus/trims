import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    background-color: ${props => props.theme.colors.background};
    min-height: 100vh;
    min-width: 100vw;

    width: 100%;
    height: 100%;

  }
  
  *, button, input{
    border: 0;
    background: 0;
    font-family: var(--lato);
    outline: 0;
  }
  
  button:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  :root {
    --container: 1280px;

    --lato: 'Lato';
    
    @media(max-width:  1280px){
      --container: 608px;
    }

    @media(max-width: 607px){
      --container: calc(100vw - 48px);
    }
  }
`;
