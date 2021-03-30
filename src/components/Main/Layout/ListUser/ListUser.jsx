import React from 'react';
import styled from 'styled-components';
import ImgPeople from '../../../../images/User.svg';
import ImgClocke from '../../../../images/fi_clock.svg'
 const LISTDATA = [
    { 
        user:  {
        date:"January 06, 2020",
        type:"Afternoon",
        period:"15:00 - 23:00",
        hours:"8h",
        salary:"$1,630",
        bonus:"30"
        }
    }   
 ]
 const TableBody = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #0c1427;
  vertical-align: middle;
  
  position:relative;
  align-items: center;
    display: flex;
    
  &:nth-child(1){
    padding-left: 30px;
  }
  &:nth-child(3){
    padding-left: 30px;
  }
  &:nth-child(1)::before{
    content:"";
    position:absolute;
    width: 20px;
    height:20px;
    left:0;
    top:calc(50% - 10px);
    background:url(${ImgPeople});
        background-repeat: no-repeat;
  }
  &:nth-child(3)::before{
    content:"";
    position:absolute;
    width: 20px;
    height:20px;
    left:0;
    top:calc(50% - 10px);
    background:url(${ImgClocke});
        background-repeat: no-repeat;
  }
  &:nth-child(1){
    flex: 0 0 20%;
  }  
  &:nth-child(2){
    flex: 0 0 15%;
  }
  &:nth-child(3){
    flex: 0 0 20%;
  }
  &:nth-child(4){
    flex: 0 0 15%;
  }
  &:nth-child(5){
    flex: 0 0 15%;
  }
  &:nth-child(6){
    flex: 0 0 15%;
  }
  &:nth-child(7){
    flex: 0 0 10%;
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
  position:relative;
  padding: 0 20px;
    box-sizing:border-box;  
`;
    

const ListUser = props => {
    console.log(LISTDATA.map(({user})=> user))
    // console.log(
    //     Object.keys(LISTDATA).map(key => <div key={key}>{LISTDATA[key]}</div>)
    // )
    return (
        <>
          {LISTDATA.map(({ user }, index) => (
          <TableBodyStyle>
            <TableBody>{user.date}</TableBody>
            <TableBody>{user.type}</TableBody>
            <TableBody>{user.period}</TableBody>
            <TableBody>{user.hours}</TableBody>
            <TableBody>{user.salary}</TableBody>
            <TableBody>{user.bonus}</TableBody>
          </TableBodyStyle>
        ))}
        </>
            
            
            
         
        
      
    );
};


export default ListUser;