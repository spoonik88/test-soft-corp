import React from "react";
import styled from "styled-components";
import { getUserList } from "../../utils/mockUserList";
import { HeaderItem } from "../Header/Header";
import UserRow from "../UserRow/UserRow";
import SelectForm from "./SelectForm/SelectForm";

const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media${(props) => props.theme.media.tablet} {
    height: 465px;
    overflow-y: scroll;
    padding-right: 10px;
    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-track {
      background: #e8eaf0;
    }

    ::-webkit-scrollbar-thumb {
      background: #8697a8;
      border-radius: 2.5px;
    }
  }
`;
const ColorText = styled.span`
  color: #088475;
  @media${(props) => props.theme.media.tablet} {
    flex: 0 0 100%;
    margin-bottom: 15px;

    display: inline-block;
  }
`;

const Dashboard = () => {
  let users = getUserList(12);

  return (
    <>
      <HeaderItem>
        <h1>
          All Shifts for <ColorText>January 2021 </ColorText>{" "}
        </h1>
        <SelectForm />
      </HeaderItem>
      <TableWrapper>
        {users.map((user, index) => (
          <UserRow key={index} user={user} index={index} />
        ))}
      </TableWrapper>
    </>
  );
};

export default Dashboard;
