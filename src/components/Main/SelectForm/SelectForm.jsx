import React, { Component } from "react";
import styled from "styled-components";
import Select from "react-select";

const SelectWrapper = styled.div`
  height: 44px;
`;

const SelectItem = styled.select`
  border: 1px solid #dedfe2;
  box-sizing: border-box;
  border-radius: 6px;
  border-radius: 8px;
  width: 165px;
  height: 44px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #0c1427;
  :focus {
    outline: none;
    border: 1px solid #dedfe2;
    box-sizing: border-box;
  }
  option {
    width: 59px;
    height: 17px;
    background: #ffffff;
    border: 1px solid rgba(12, 20, 39, 0.05);
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
  }
`;
const options = [
  { value: "chocolate", label: "January" },
  { value: "strawberry", label: "February" },
  { value: "vanilla", label: "March" },
  { value: "chocolate", label: "April" },
  { value: "strawberry", label: "May" },
  { value: "vanilla", label: "June" },
  { value: "chocolate", label: "July" },
  { value: "strawberry", label: "August" },
  { value: "vanilla", label: "September" },
  { value: "chocolate", label: "October" },
  { value: "strawberry", label: "November" },
  { value: "vanilla", label: "December" },
];

const SelectForm = () => {
  return (
    <SelectWrapper>
      <SelectItem>
        <option value="" hidden size="7">
          January, 2021
        </option>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August </option>
        <option value="9">September </option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </SelectItem>
    </SelectWrapper>
  );
};

export default SelectForm;
