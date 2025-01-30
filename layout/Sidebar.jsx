import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { BiSolidDoughnutChart } from "react-icons/bi";
import BillingIcon from "../assets/images/Calendar-billing.svg";

function Sidebar() {
  return (
    <nav className="sidebar-nav">
      <ul>
        <li className="nav-item">
          <Link to="/dashboard">
            <IoHomeOutline className="menu-icon" />
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/toolsprofile">
            <IoGridOutline className="menu-icon" />
            Configurations
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/database">
            <BsGraphUp className="menu-icon" />
            Database
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/usage">
            <BiSolidDoughnutChart className="menu-icon" />
            Usage
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/billingandplans">
            <img src={BillingIcon} className="menu-icon-img" alt="" />
            Billing and Plans
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
