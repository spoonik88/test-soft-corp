import React from "react";
import AvatarsUserImg from "../../../images/UserAvatar.png";
import styled from "styled-components";

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 134px;
  height: 50px;
  margin: 0 0 42px 35px;
  @media${(props) => props.theme.media.tablet}{
    position: absolute;
    top: 30px;
    left: 28px;
    margin:0;
  }
`;
const AvatarItemImg = styled.img`
  width: 50px;
  height: 50px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 15px;
`;
const AvatarItem = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #0c1427;
`;

const Avatar = () => {
  return (
    <AvatarWrapper>
      <AvatarItemImg src={AvatarsUserImg} alt="avatar" />

      <AvatarItem>Darlene Robertson.</AvatarItem>
    </AvatarWrapper>
  );
};
export default Avatar;
