import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import "./TabComponent.css";

const TabComponent = ({ tabs, className, tabColors = [] }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTabFromUrl = () => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("tab");
    return tabParam ? parseInt(tabParam.replace("tab", ""), 10) : 0; // Parse "tab0" to 0, "tab1" to 1, etc.
  };

  const [activeTab, setActiveTab] = useState(getTabFromUrl());

  useEffect(() => {
    // Update the active tab state if the URL changes
    const tabFromUrl = getTabFromUrl();
    if (tabFromUrl !== activeTab) {
      setActiveTab(tabFromUrl);
    }
  }, [location.search]);
  const handleTabChange = (index) => {
    setActiveTab(index);
    navigate(`?tab=tab${index}`);
  };

  return (
    <div className={`tab-component ${className}`}>
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li key={index} className={activeTab === index ? "active" : ""}>
            <button onClick={() => handleTabChange(index)}>{tab.label}</button>
          </li>
        ))}
      </ul>
      <div
        className="tab-content"
        style={{
          backgroundColor: tabColors[activeTab],
        }}
      >
        {tabs[activeTab]?.content}
      </div>
      {tabs?.content}
    </div>
  );
};

TabComponent.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

TabComponent.defaultProps = {
  className: "",
  tabs: [],
};

export default TabComponent;
