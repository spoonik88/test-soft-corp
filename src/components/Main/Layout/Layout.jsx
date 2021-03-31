import React from "react";
import styled from "styled-components";
import { getTitleList, getUserList } from "../../../utils/mockUserList";
import ListUser from "./ListUser/ListUser"; //TODO: rename component and file to UserRow



const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media${(props) => props.theme.media.tablet}{
    height: 465px;
    overflow-y: scroll;
    padding-right: 10px;
  ::-webkit-scrollbar {
    width: 3px;
    }
     
   ::-webkit-scrollbar-track {
    background: #E8EAF0;
    }
     
   ::-webkit-scrollbar-thumb {
    background: #8697A8;
    border-radius: 2.5px;
    }
  }
`;



const Layout = () => { //TODO rename component to DashBoard
  
  let users = getUserList(12);
 
  return (
    <TableWrapper>
      
        {users.map((user, index) => (
          <ListUser key={index} user={user} />
        ))}
      
    </TableWrapper>
  );
};

export default Layout;
