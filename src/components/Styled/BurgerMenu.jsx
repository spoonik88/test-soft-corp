import styled from "styled-components";

const BurgerMenu = styled.div`
  width: 100%;
  height: 56px;
  background: #0c1427;
  display: none;
  @media${(props) => props.theme.media.tablet} {
    display: block;
    position: ralative;
  }
`;

export default BurgerMenu;
