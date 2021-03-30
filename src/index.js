import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import App from "./App";


const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
body{
  font-family: 'Inter', sans-serif;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
`
ReactDOM.render(  
  <BrowserRouter> 
  <Global/>
  <App/>
  </BrowserRouter> ,
document.getElementById('root')
);
