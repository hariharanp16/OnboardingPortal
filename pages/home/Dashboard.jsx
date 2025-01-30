import React, { useState, useEffect } from "react";
import ScatterChart from "../../components/scatterChart/ScatterChart";
import ButtonComponent from "../../common/button/ButtonComponent";
import NavSteps from "../../layout/NavSteps";

function Dashboard() {
  const [dateTime, setDateTime] = useState(new Date());
  const [expandPlans, setExpandPlans] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date()); // Update the date and time every second
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = daysOfWeek[dateTime.getDay()];
  const date = dateTime.toLocaleDateString(); // Format the date as per the locale
  const time = dateTime.toLocaleTimeString(); // Format the time as per the locale
  const hour = dateTime.getHours(); // Get the hour as a number (0-23)

  let timeOfGreetings;
  if (hour >= 6 && hour < 12) {
    timeOfGreetings = "Good Morning";
  } else if (hour >= 12 && hour < 16) {
    timeOfGreetings = "Good Afternoon";
  } else if (hour >= 16 && hour < 21) {
    timeOfGreetings = "Good Evening";
  } else {
    timeOfGreetings = "Welcome";
  }

  const handlePlanDetails = () => {
    setExpandPlans((prev) => !prev);
  };

  const handleUpgradePlans = () => {
    window.open("https://www.kieverse.ai/pricing.html", "_blank");
  };

  return (
    <div className="main-container">
      <div className="row my-3">
        <div className="col-12">
          <h4 className="greetings-title">{timeOfGreetings}, John</h4>
          <small className="timeDate" id="currentDateTime">
            {day} {date},{time}
          </small>
        </div>
      </div>
      <div className="row my-3 justify-content-start">
        <div
          className={`p-3 animate-div col-sm-12 ${
            !expandPlans ? "col-md-4" : "col-md-8"
          }`}
        >
          <div className="tools-container">
            <h4> Billing & Plan Details</h4>
            <div className="plans-subscribe">
              <div className="subscription-details">
                <span className="plan-heading">
                  <span className="color-yellow">Basic</span> Package
                </span>
                <span className="plan-price">$20 </span>
              </div>
              {expandPlans && (
                <div className="plan-details">
                  <h4>Payment Status: Completed </h4>
                  <p>Portals: 5</p>
                  <p>Categories: 10</p>
                  <p>Own Brands: 5</p>
                  <p>Competition Brands: 10</p>
                  <p>Own SKUs: 10</p>
                  <p>Competition SKUs: 15</p>
                </div>
              )}
            </div>
            <div className="subscription-payment">
              <div className="pay-alert">
                <small>Previous Payment</small>
                <span className="pay-date">December 1, 2024</span>
              </div>
              <div className="pay-alert">
                <small>Next Payment</small>
                <span className="pay-date">December 1, 2025</span>
              </div>
            </div>
            <div className="subscription-actions">
              <ButtonComponent
                btnClass={"btn btn-secondary"}
                btnName={"See Plan Details"}
                onClick={handlePlanDetails}
              ></ButtonComponent>
              <ButtonComponent
                btnClass={"btn btn-primary"}
                btnName={"Upgrade Plan"}
                onClick={handleUpgradePlans}
              ></ButtonComponent>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 p-3">
          <div className="tools-container">
            <h4>Subscribed Tools & Links</h4>
            <div className="row flex-column">
              <div className="col-12">
                <div className="tools-box subscribed digi">
                  <a
                    href="https://m594bmgj-3000.inc1.devtunnels.ms/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    Digi-Cadence
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <small>Subscribed</small>
                </div>
              </div>
              <div className="col-12">
                <div className="tools-box not-subscribed spend">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.powerbi.com/groups/3a954e00-55f5-4882-831b-a43544a29700/reports/d1fa22ab-17c9-4801-a202-1deb9a291b75/ReportSectionea0e9af791cda5e01723?experience=power-bi"
                    className=""
                  >
                    Spendverse{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <small>Not Subscribed</small>
                </div>
              </div>
              <div className="col-12">
                <div className="tools-box not-subscribed meta">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.powerbi.com/groups/a2a28cf4-a7f5-4830-8fa4-370e8f09dae7/reports/b4c4bb49-e88f-4dfa-bf39-e6780f8458a8/ReportSectiond149c1c5e8b1c7ae6ef6?experience=power-bi"
                    className=""
                  >
                    Meta360 + SOV{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <small>Not Subscribed</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4 className="pt-4 mb-4">Quick Links & Setup</h4>
          <NavSteps />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
