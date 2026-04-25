import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    h1,
    h2,
    h3, 
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    img {
      display: block;
      height: auto;
      width: 100%;
      max-width: 100%;
    }

    body {
        background-color: #fef7da;
        font-family: "Montserrat", sans-serif;
        font-size: 13px;
    }
    h2 {
        font-size: 16px;
    }
    img {
        border-radius: 20px;
        aspect-ratio: 1;
        object-fit: cover;

    } 

    #root {
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
    }
`;
