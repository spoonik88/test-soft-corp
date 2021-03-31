import React from "react";
import styled from "styled-components";

const SelectWrapper = styled.div`
  height: 44px;
  @media${(props) => props.theme.media.tablet} {
    margin-bottom: 15px;
  }
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
`;
const StyledOption = styled.option`
  width: 59px;
  height: 17px;
  background: ${(props) => (props.color ? props.color : "#ffffff")};
  border: 1px solid rgba(12, 20, 39, 0.05);
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
  border-radius: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
`;
const options = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const SelectForm = () => {
  return (
    <SelectWrapper>
      <SelectItem>
        <StyledOption value="" hidden size="7">
          January, 2021
        </StyledOption>
        {options.map((option, index) => (
          <option key={index} value={index + 1}>
            {option.label}
          </option>
        ))}
      </SelectItem>
    </SelectWrapper>
  );
};

export default SelectForm;
