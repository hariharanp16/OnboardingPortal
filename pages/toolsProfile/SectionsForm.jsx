import React, { useState } from "react";
import InputField from "../../common/input/Input";
import ButtonComponent from "../../common/button/ButtonComponent";
import MultiSelectDropdown from "../../components/MultiSelectDropdown/MultiSelectDropdown";

const SectionsForm = () => {
  const [marketplace, setMarketplace] = useState([]);
  const [selectedMarketplace, setSelectedMarketplace] = useState([]);
  const [socialwatch, setSocialwatch] = useState([]);
  const [selectedSocialwatch, setSelectedSocialwatch] = useState([]);
  const [digitalSpends, setDigitalSpends] = useState([]);
  const [selectedDigitalSpends, setSelectedDigitalSpends] = useState([]);
  const [websitePerformance, setWebsitePerformance] = useState([]);
  const [selectedWebsitePerformance, setSelectedWebsitePerformance] = useState(
    []
  );

  const handleSectionSubmit = () => {
    alert("Submit clicked");
  };
  const handleMarketplace = () => {
    alert("Submit clicked");
  };
  const handleSocialwatch = () => {
    alert("Submit clicked");
  };
  const handleDigitalSpends = () => {
    alert("Submit clicked");
  };
  const handleWebsitePerformance = () => {
    alert("Submit clicked");
  };

  return (
    <>
      <div className="row align-items-center mb-3">
        <div className="col-12">
          <ul className="list-description">
            <li>
              Marketplaces refers to Ecommerce and Qcommerce portals list. you
              can select more than 1 and provide credential details in the
              Portal Details
            </li>
            <li>
              Socialwatch refers to Social portals list. you can select more
              than 1 portals and provide the social handles names in the portal
              details.
            </li>
            <li>
              Digital Spends refers to Off Paid platforms portals list like FB
              Advertising , DV360+ Advertising etc. you can select more than 1
              portals and provide the credentials in the portal details.
            </li>
            <li>
              Once the fields are saved , please go to Database to remove the
              brands and categories information from Brand Repository
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-3">
          <MultiSelectDropdown
            options={marketplace}
            selectedValues={selectedMarketplace}
            onChange={handleMarketplace}
            placeholder="Select Marketplace"
          />
        </div>
        <div className="col-sm-12 col-md-3">
          <MultiSelectDropdown
            options={socialwatch}
            selectedValues={selectedSocialwatch}
            onChange={handleSocialwatch}
            placeholder="Select Socialwatch"
          />
        </div>
        <div className="col-sm-12 col-md-3">
          <MultiSelectDropdown
            options={digitalSpends}
            selectedValues={selectedDigitalSpends}
            onChange={handleDigitalSpends}
            placeholder="Select Digital Spends"
          />
        </div>
        <div className="col-sm-12 col-md-3">
          <MultiSelectDropdown
            options={websitePerformance}
            selectedValues={selectedWebsitePerformance}
            onChange={handleWebsitePerformance}
            placeholder="Select Website Performance"
          />
        </div>
        <div className="col-12">
          <div className="actions-buttons mt-4">
            <ButtonComponent
              btnClass={"btn btn-primary"}
              btnName={"Submit"}
              onClick={() => handleSectionSubmit()}
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsForm;
