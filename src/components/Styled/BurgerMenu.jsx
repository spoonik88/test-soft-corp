import React from "react";
import styled from "styled-components";

const BurgerMenuStyle = styled.div`
  width: 100%;
  height: 56px;
  background: #0c1427;
  display: none;
  @media${(props) => props.theme.media.tablet} {
    display: block;
    position: ralative;
    z-index: 10;
  }
`;
const MenuButton = styled.div`
  position: relative;
  height: 22px;
  width: 7px;
  outline: none;
  margin-left: 16px;
  top: calc(50% - 11px);

  span,
  span::before,
  span::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 3px;
    border-radius: 1.1px;
    background: #fafafa;
    transition: 500ms cubic-bezier(0.77, 0, 0.175, 1);
  }
  span {
    position: relative;
    display: block;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
  }

  span::before {
    top: -6px;
  }

  span::after {
    top: 6px;
  }

  :hover > span,
  :hover > span::before,
  :hover > span::after {
    background: #088475;
  }
`;

const ActiveButton = styled(MenuButton)`
  & > span {
    background: transparent;
    cursor: pointer;
  }

  > span::before {
    transform: rotate(-225deg);
    top: 0px;
  }

  > span::after {
    transform: rotate(225deg);
    top: 0px;
  }
  :hover > span {
    background: transparent;
  }
`;

const BurgerMenu = ({ isActive, onMenuClick }) => {
  const handleClick = () => {
    onMenuClick && onMenuClick(isActive);
  };

  const MyButton = isActive ? ActiveButton : MenuButton;

  return (
    <BurgerMenuStyle>
      <MyButton onClick={handleClick}>
        <span></span>
      </MyButton>
    </BurgerMenuStyle>
  );
};

export default BurgerMenu;
