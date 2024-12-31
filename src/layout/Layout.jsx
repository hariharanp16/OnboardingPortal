import React, { useEffect } from "react";
import HeaderComponent from "./header/Header";
import Sidebar from "./Sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const hideSidebar =
    location.pathname === "/" || location.pathname === "/LoginDetails";
  console.log("Current Path:", location.pathname);
  return (
    <>
      <div className="container-fluid g-0">
        <div className="row g-0">
          <div className="col-12">
            <HeaderComponent />
          </div>
        </div>
        <div className="row g-0">
          {!hideSidebar && (
            <div className="col-md-2 col-lg-2 sidebar text-start">
              <Sidebar />
            </div>
          )}
          <div
            className={`childrenContainer ${
              !hideSidebar ? "col-md-10 col-lg-10" : "col-md-12 col-lg-12"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
