import React from "react";
import ImgArrow from "../../../images/arrow.svg";
import styled from "styled-components";
import ButtonReg from "../../Styled/ButtonReg";
import SelectForm from "../SelectForm/SelectForm";

const ButtonArrow = styled.button`
  width: 12px;
  height: 12px;
  background: url(${ImgArrow});
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  cursor: pointer;
  :focus {
    border: 0;
    outline: none;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;  
  flex-wrap:wrap;
`;
const HeaderItem = styled.div`
display: flex;
width: 100%; 
flex:0 0 100%;
height:min-content;
justify-content: space-between;
margin-bottom: 26px;

&h1{
    font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 48px;
display: flex;
align-items: center;
color: #0C1427;
}


`
const ColorText =styled.span`
color:#088475;
`

const Header = (props) => {
  return (
    <HeaderWrapper>
        <HeaderItem>
        <ButtonArrow />
      <ButtonReg>Sign out</ButtonReg>
        </HeaderItem>

        <HeaderItem>
            <h1>All Shifts for <ColorText>January 2021 </ColorText> </h1>
            <SelectForm/>
        </HeaderItem>
    </HeaderWrapper>

  );
};

export default Header;
