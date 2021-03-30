import React from "react";
import styled from "styled-components";
import { getUserList } from "../../../utils/mockUserList";
import ListUser from "./ListUser/ListUser"; //TODO: rename component and file to UserRow

const TABLE_HEADER = [
  {
    title: "Date",
  },
  {
    title: "Shift type",
  },
  {
    title: "Period",
  },
  {
    title: "Hours",
  },
  {
    title: "Salary (gross)",
  },
  {
    title: "Bonus (gross)",
  },
];

const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
`;

const TableRow = styled.div`
  flex: 0 0 100%;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 8px;
`;

const TableInner = styled.div`
  width: 100%;
  @media${(props) => props.theme.media.tablet} {
    background: #ffffff;
    border: 1px solid rgba(12, 20, 39, 0.05);
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
    border-radius: 20px;
  }
`;
const Layout = () => { //TODO rename component to DashBoard
  let users = getUserList(12);
  return (
    <TableWrapper>
      <TableInner>
        <TableRow>
          {TABLE_HEADER.map(({ title }, index) => (
            <TableHead key={index}>{title}</TableHead>
          ))}
        </TableRow>
        {users.map((user, index) => (
          <ListUser key={index} user={user} />
        ))}
      </TableInner>
    </TableWrapper>
  );
};

export default Layout;
