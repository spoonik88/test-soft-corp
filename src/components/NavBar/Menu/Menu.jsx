import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DashboardImg from "../../../images/Dashboard.svg";
import PeopleImg from "../../../images/People.svg";
import OperationsImg from "../../../images/Operations.svg";
import SchedulePlanningImg from "../../../images/SchedulePlanning.svg";
import AdministrationImg from "../../../images/Administration.svg";
import ActionTrackingImg from "../../../images/ActionTracking.svg";

const MENU = [
  {
    title: "My Dashboard",
    to: "/main",
    icon: DashboardImg,
  },
  {
    title: "People",
    to: "/people",
    icon: PeopleImg,
  },
  {
    title: "Operations",
    to: "/operations",
    icon: OperationsImg,
  },
  {
    title: "Schedule Planning",
    to: "/schedule-planning",
    icon: SchedulePlanningImg,
  },
  {
    title: "Administration",
    to: "/administration",
    icon: AdministrationImg,
  },
  {
    title: "Action Tracking",
    to: "/action-tracking",
    icon: ActionTrackingImg,
  },
];

const MenuWrapper = styled.nav`
  & {
    display: flex;
    justify-content: center;
    margin-top: 45px;
  }
  a {
    height: 40px;
    width: 199px;
    position: relative;

    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 21%;
    cursor: pointer;
    margin-bottom: 2px;
  }
  a:hover {
    background: #ffffff;
    border-radius: 8px;
    position: relative;
    box-sizing: border-box;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #0c1427;
    position: reletive;
  }
`;
const IconImg = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 5%;
  top: calc(50% - 10px);
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <div>
        {MENU.map(({ title, to, icon }, index) => (
          <NavLink
            activeStyle={{
              background: "#ffffff",
              borderRadius: "8px",
            }}
            to={to}
            key={index}
          >
            <IconImg src={icon} alt="icon" />
            <span>{title}</span>
          </NavLink>
        ))}
      </div>
    </MenuWrapper>
  );
};
export default Menu;
