import React from "react";
import styled from "styled-components";
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

const NavBar = () => {
  return (
    <NavBarWrapper>
      <Menu />
      <Avatar />
    </NavBarWrapper>
  );
};
export default NavBar;
