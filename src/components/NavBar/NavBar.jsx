import React from "react";
import styled from "styled-components";
import ButtonReg from "../Styled/ButtonReg";
import Avatar from "./Avatar/Avatar";
import Menu from "./Menu/Menu";

const NavBarWrapper = styled.div`
  width: 300px;
  background: #e8eaf0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  @media${(props) => props.theme.media.tablet} {
    display: none;
  }
`;
const ActiveNavBarWrapper = styled(NavBarWrapper)`
  @media${(props) => props.theme.media.tablet} {
    position: fixed;
    display: flex;
    top: 56px;
    height: 100vh;
    width: 100%;
    z-index: 100;
    background: #ffffff;
  }
`;
const ButtonRegStyle = styled(ButtonReg)`
  display: none;
  @media${(props) => props.theme.media.tablet} {
    display: inline;
    position: absolute;
    right: 27px;
    top: 38px;
  }
`;
const NavBar = ({ isActive }) => {
  const MyNavBarWrapper = isActive ? ActiveNavBarWrapper : NavBarWrapper;

  return (
    <MyNavBarWrapper>
      <ButtonRegStyle>Sign out</ButtonRegStyle>
      <Menu />
      <Avatar />
    </MyNavBarWrapper>
  );
};
export default NavBar;
