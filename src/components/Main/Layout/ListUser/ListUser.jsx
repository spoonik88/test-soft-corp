import React from "react";
import styled from "styled-components";
import ImgPeople from "../../../../images/User.svg";
import ImgClocke from "../../../../images/fi_clock.svg";
import { getTitleList } from "../../../../utils/mockUserList";

const TableBody = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #0c1427;
  vertical-align: middle;
  position: relative;
  align-items: center;
  display: flex;
  &:nth-child(1) {
    padding-left: 30px;
  }
  &:nth-child(3) {
    padding-left: 30px;
  }
  &:nth-child(1)::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0;
    top: calc(50% - 10px);
    background: url(${ImgPeople});
    background-repeat: no-repeat;
  }
  &:nth-child(3)::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0;
    top: calc(50% - 10px);
    background: url(${ImgClocke});
    background-repeat: no-repeat;
  }
  &:nth-child(1) {
    flex: 0 0 20%;
  }
  &:nth-child(2) {
    flex: 0 0 15%;
  }
  &:nth-child(3) {
    flex: 0 0 20%;
  }
  &:nth-child(4) {
    flex: 0 0 15%;
  }
  &:nth-child(5) {
    flex: 0 0 15%;
  }
  &:nth-child(6) {
    flex: 0 0 15%;
  }
  &:nth-child(7) {
    flex: 0 0 10%;
  }
  @media${(props) => props.theme.media.tablet} {
    
    &:nth-child(1) {
      flex: 0 0 15%;
      order:1;
    }
    &:nth-child(2) {
      flex: 0 0 15%;
      order:5;
    }
    &:nth-child(3) {
      flex: 0 0 15%;
      order:2;
    }
    &:nth-child(4) {
      flex: 0 0 15%;
      order:6;
    }
    &:nth-child(5) {
      flex: 0 0 15%;
      order:1;
      display:none;
    }
    &:nth-child(6) {
      flex: 0 0 15%;
      order:3;
    }
    &:nth-child(7) {
      flex: 0 0 10%;
      order:4;
    }
  }
`;
const TableBodyStyle = styled.div`
  flex: 0 0 100%;
  display: flex;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(12, 20, 39, 0.05);
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
  border-radius: 20px;
  height: 60px;
  position: relative;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  @media${(props) => props.theme.media.tablet} {
    border: 0;
    box-shadow: none;
    border-radius: 0;
    background: transparent;
    flex-direction: column;
    flex: 0 0 65%;
    align-items: flex-end;
    justify-content: space-between;
    height: 100%;
    padding: 0 16px 0 0;
    
  }
`;
const TableHead = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #8697a8;
  text-align: left;
  &:nth-child(1) {
    flex: 0 0 20%;
  }
  &:nth-child(2) {
    flex: 0 0 15%;
  }
  &:nth-child(3) {
    flex: 0 0 20%;
  }
  &:nth-child(4) {
    flex: 0 0 15%;
  }
  &:nth-child(5) {
    flex: 0 0 15%;
  }
  &:nth-child(6) {
    flex: 0 0 15%;
  }
  &:nth-child(7) {
    flex: 0 0 10%;
  }
  @media${(props) => props.theme.media.tablet}{
    align-items: center;
    display: flex;
    &:nth-child(1) {
      flex: 0 0 15%;
      order:1;
    }
    &:nth-child(2) {
      flex: 0 0 15%;
      order:5;
    }
    &:nth-child(3) {
      flex: 0 0 15%;
      order:2;
    }
    &:nth-child(4) {
      flex: 0 0 15%;
      order:6;
    }
    &:nth-child(5) {
      flex: 0 0 15%;
      order:1;
      display:none;
    }
    &:nth-child(6) {
      flex: 0 0 15%;
      order:3;
    }
    &:nth-child(7) {
      flex: 0 0 10%;
      order:4;
    }
  }
`;

const TableRow = styled.div`
  flex: 0 0 100%;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 8px;
  @media${(props) => props.theme.media.tablet} {
    flex-direction: column;
    flex: 0 0 35%;
    justify-content: space-between;
    padding: 0 0px 0 16px;
    box-sizing: border-box;
    margin: 0;
  }
`;

const TableInner = styled.div`
  width: 100%;
  @media${(props) => props.theme.media.tablet} {
    background: #ffffff;
    border: 1px solid rgba(12, 20, 39, 0.05);
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
    border-radius: 20px;
    margin-bottom:16px;
    display:flex;
    height:212px;
    padding: 16px 0 20px 0;
  }
`;


const ListUser = ({ user }) => {
  let title = getTitleList(1);

  return !user ? null : (
    <TableInner>
      <TableRow>
        {title.map(({ title }, index) => (
          <TableHead key={index}>{title}</TableHead>
        ))}
      </TableRow>
      <TableBodyStyle>
        <TableBody>{user.date}</TableBody>
        <TableBody>{user.type}</TableBody>
        <TableBody>{user.period}</TableBody>
        <TableBody>{user.hours}</TableBody>
        <TableBody>{user.salary}</TableBody>
        <TableBody>{user.bonus}</TableBody>
      </TableBodyStyle>
    </TableInner>
  );
};

export default ListUser;
