import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
`;
const theme = {
  media: {
    phone: "(max-width:485px)",
    tablet: "(max-width:960px) and (min-width:320px)",
  },
};

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
