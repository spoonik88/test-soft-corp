import React from "react";
import ImgArrow from "../../images/arrow.svg";
import styled from "styled-components";
import ButtonReg from "../Styled/ButtonReg";

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
  @media${(props) => props.theme.media.tablet} {
    display: none;
  }
`;
const ButtonRegInner = styled(ButtonReg)`
  @media${(props) => props.theme.media.tablet} {
    display: none;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
export const HeaderItem = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 100%;
  height: min-content;
  justify-content: space-between;
  margin-bottom: 26px;

  &h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    display: flex;
    align-items: center;
    color: #0c1427;
  }
  @media${(props) => props.theme.media.tablet} {
    flex-wrap: wrap;
    margin-top: -10px;
  }
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderItem>
        <ButtonArrow />
        <ButtonRegInner>Sign out</ButtonRegInner>
      </HeaderItem>
    </HeaderWrapper>
  );
};

export default Header;
