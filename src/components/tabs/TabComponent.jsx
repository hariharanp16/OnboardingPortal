import React, { useState } from "react";
import PropTypes from "prop-types";

import "./TabComponent.css";

const TabComponent = ({ tabs, className, tabColors = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
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
