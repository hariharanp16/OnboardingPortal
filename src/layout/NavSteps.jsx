import React from "react";
import { Link } from "react-router-dom";
import { FcDataConfiguration } from "react-icons/fc";
import { BsDatabaseGear } from "react-icons/bs";
import { FcOrganization } from "react-icons/fc";
import MultiOrganization from "../assets/images/multi-channel-marketing-line-icon-vector.svg";
import { BiFoodMenu } from "react-icons/bi";
import { GrMultiple } from "react-icons/gr";

import "./NavSteps.css";

const NavSteps = () => {
  return (
    <div className="navSteps">
      <ul>
        <li>
          <Link to="/toolsProfile">
            <div className="count-step">
              <span className="steps-num">Step 1</span>
              <p className="count-num">2/15</p>
            </div>
            <img src={MultiOrganization} alt="" />
            Organisation & Brands
          </Link>
        </li>
        <li>
          <Link to="/toolsProfile">
            <div className="count-step ">
              <span className="steps-num">Step 2</span>
              <p className="count-num">1/5</p>
            </div>
            <BiFoodMenu className="navstep-icon" />
            Section Details
          </Link>
        </li>
        <li>
          <Link to="/toolsProfile">
            <div className="count-step ">
              <span className="steps-num">Step 3</span>
              <p className="count-num">1/5</p>
            </div>
            <BsDatabaseGear className="navstep-icon" />
            Portal Details
          </Link>
        </li>
        <li>
          <Link to="/brandProfile">
            <div className="count-step justify-content-center">
              <span className="steps-num">Step 4</span>
            </div>
            <GrMultiple className="navstep-icon" />
            Database
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavSteps;
