import React, { useEffect, useState } from "react";
import HeaderLogo from "../../assets/images/kieVerse-logo.png";
import { FaRegCircleUser, FaPowerOff } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getHamburgerRequest,
  getMobileRequest,
  logout,
} from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  const [profile, setProfile] = useState(false);

  const location = useLocation();
  const hideLoginMenu =
    location.pathname === "/" || location.pathname === "/LoginDetails";

  const handleLogin = () => {
    setProfile((prevState) => !prevState);
  };

  return (
    <header id="header" class="pageheader pt-3">
      <div class="logo">
        <img src={HeaderLogo} alt="KiE Square" class="logo-img" />
      </div>
      <span className="tool-title-text">Onboarding Portal</span>
      <div className="login-nav">
        {!hideLoginMenu && (
          <div className="profile-menu">
            <FaRegCircleUser onClick={handleLogin} className="profileIcon" />
            {profile && (
              <ul className="profile-submenu">
                <li>
                  <Link to="/userProfileScreen">Profile</Link>
                </li>
                <li>
                  <Link to="/security">Security</Link>
                </li>
                <li>
                  <Link to="/brandprofile">Payment Status</Link>
                </li>
                <li>
                  <Link to="/brandprofile">Signout</Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
