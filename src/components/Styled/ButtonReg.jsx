import styled from "styled-components";

const ButtonReg = styled.button`
  width: 94px;
  height: 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8.5px 18px;
  background: rgba(5, 131, 115, 0.1);
  border-radius: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #058373;
  border: 0;
  cursor: pointer;
  :focus {
    border: 0;
    outline: none;
  }
`;

export default ButtonReg;
