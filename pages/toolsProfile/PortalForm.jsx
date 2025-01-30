import React, { useState, useEffect } from "react";
import InputField from "../../common/input/Input";
import ButtonComponent from "../../common/button/ButtonComponent";

const PortalForm = () => {
  const [marketplaceRow, setMarketplaceRow] = useState(
    JSON.parse(localStorage.getItem("marketplaceRows")) || [
      { id: 1, portalName: "", username: "", password: "", brandNames: "" },
    ]
  );
  const [socialWatchRow, setSocialWatchRow] = useState(
    JSON.parse(localStorage.getItem("socialWatchRows")) || [
      { id: 1, portalName: "", handlename: "", handleurl: "", brandNames: "" },
    ]
  );
  const [digitalSpendsRow, setDigitalSpendsRow] = useState(
    JSON.parse(localStorage.getItem("digitalSpendsRows")) || [
      {
        id: 1,
        portalName: "",
        username: "",
        password: "",
        spendId: "",
        brandNames: "",
      },
    ]
  );
  const [organicRow, setOrganicRow] = useState(
    JSON.parse(localStorage.getItem("organicRows")) || [
      { id: 1, brandNames: "", websiteList: "" },
    ]
  );

  // Save rows to localStorage whenever rows state changes
  useEffect(() => {
    localStorage.setItem("marketplaceRows", JSON.stringify(marketplaceRow));
    localStorage.setItem("socialWatchRows", JSON.stringify(socialWatchRow));
    localStorage.setItem("digitalSpendsRows", JSON.stringify(digitalSpendsRow));
    localStorage.setItem("organicRows", JSON.stringify(organicRow));
  }, [marketplaceRow, socialWatchRow, digitalSpendsRow, organicRow]);

  const handleAddMarketPlaceRow = () => {
    const newRow = {
      id: new Date().getTime(),
      portalName: "",
      username: "",
      password: "",
      brandNames: "",
    };
    setMarketplaceRow([...marketplaceRow, newRow]);
  };
  const handleAddSocialWatchRow = () => {
    setSocialWatchRow((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        portalName: "",
        handlename: "",
        handleurl: "",
        brandNames: "",
      },
    ]);
  };

  const handleAddDigitalSpendsRow = () => {
    setDigitalSpendsRow((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        portalName: "",
        username: "",
        password: "",
        spendId: "",
        brandNames: "",
      },
    ]);
  };

  const handleAddOrganicRow = () => {
    setOrganicRow((prev) => [
      ...prev,
      { id: prev.length + 1, brandNames: "", websiteList: "" },
    ]);
  };
  const handleRemoveMarketPlaceRow = (id) => {
    if (marketplaceRow.length > 1) {
      setMarketplaceRow(marketplaceRow.filter((row) => row.id !== id));
    }
  };
  const handleRemoveSocialWatchRow = (id) => {
    if (socialWatchRow.length > 1) {
      setSocialWatchRow(socialWatchRow.filter((row) => row.id !== id));
    }
  };

  const handleInputChange = (id, field, value) => {
    const updatedRows = marketplaceRow.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setMarketplaceRow(updatedRows);
  };
  const handleSubmit = async () => {
    // try {
    //   const response = await axios.post("/api/save-rows", { rows });
    //   console.log("Data submitted successfully:", response.data);
    // } catch (error) {
    //   console.error("Error submitting data:", error);
    // }
    console.log("submitted ");
  };

  return (
    <>
      <ul className="list-description">
        <li>
          Enter the credentials and brand names/Property ID of the Marketplace
          and Digital Spends portals highlighted in the section field and click
          on Build Connection button
        </li>
        <li>
          Enter the social handle names and brand names of the social portals
          highlighted in the section field and click on Build Connection button
        </li>
        <li>Once the connection is build for any section , click on save.</li>
        <li>
          to change or modify any portal credentials , please go to database
          section and click on remove button
        </li>
      </ul>
      {marketplaceRow.map((row) => (
        <div className="row mb-3" key={row.id}>
          <div className="col-12">
            <h4 className="mb-0">Marketplace</h4>
          </div>
          <div className="col-3">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "portalName", e.target.value)
              }
              placeholder={row.label || "Enter PortalName"}
              required
            />
          </div>
          <div className="col-3">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "username", e.target.value)
              }
              placeholder={row.label || "Enter Username"}
              required
            />
          </div>
          <div className="col-2">
            {row.label && <label>{row.label}</label>}
            <input
              type="password"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "password", e.target.value)
              }
              placeholder={row.label || "Enter Password"}
              required
            />
          </div>
          <div className="col-2">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "brandNames", e.target.value)
              }
              placeholder={row.label || "Enter Property ID"}
              required
            />
          </div>
          <div className="col-2">
            <div className="action-btns-portal">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleAddMarketPlaceRow(row.id)}
              >
                Build Connection
              </button>
            </div>
          </div>
        </div>
      ))}
      {socialWatchRow.map((row) => (
        <div className="row mb-3" key={row.id}>
          <div className="col-12">
            <h4 className="mb-0">Social Watch</h4>
          </div>
          <div className="col-3">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "portalName", e.target.value)
              }
              placeholder={row.label || "Enter PortalName"}
              required
            />
          </div>
          <div className="col-3">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "handlename", e.target.value)
              }
              placeholder={row.label || "Enter handlename"}
              required
            />
          </div>
          <div className="col-2">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "handleurl", e.target.value)
              }
              placeholder={row.label || "Enter handleurl"}
              required
            />
          </div>
          <div className="col-2">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "brandNames", e.target.value)
              }
              placeholder={row.label || "Enter Brand Names"}
              required
            />
          </div>
          <div className="col-2">
            <div className="action-btns-portal">
              <button
                type="button"
                className="btn btn-primary "
                onClick={() => handleAddSocialWatchRow(row.id)}
              >
                Build Connection
              </button>
            </div>
          </div>
        </div>
      ))}
      {digitalSpendsRow.map((row) => (
        <div className="row mb-3" key={row.id}>
          <div className="col-12">
            <h4 className="mb-0">Digital Spends</h4>
          </div>
          <div className="col-2">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "portalName", e.target.value)
              }
              placeholder={row.label || "Enter PortalName"}
              required
            />
          </div>
          <div className="col-2">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "username", e.target.value)
              }
              placeholder={row.label || "Enter Username"}
              required
            />
          </div>
          <div className="col-2">
            {row.label && <label>{row.label}</label>}
            <input
              type="password"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "password", e.target.value)
              }
              placeholder={row.label || "Enter Password"}
              required
            />
          </div>
          <div className="col-2">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "spendId", e.target.value)
              }
              placeholder={row.label || "Enter spendId"}
              required
            />
          </div>
          <div className="col-2">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "brandNames", e.target.value)
              }
              placeholder={row.label || "Enter Property ID"}
              required
            />
          </div>
          <div className="col-2">
            <div className="action-btns-portal">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleRemoveSocialWatchRow(row.id)}
              >
                Build Connection
              </button>
            </div>
          </div>
        </div>
      ))}
      {organicRow.map((row) => (
        <div className="row mb-3" key={row.id}>
          <div className="col-12">
            <h4 className="mb-0">Organic Performance</h4>
          </div>
          <div className="col-5">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "brandNames", e.target.value)
              }
              placeholder={row.label || "Enter brandNames"}
              required
            />
          </div>
          <div className="col-5">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) =>
                handleInputChange(row.id, "websiteList", e.target.value)
              }
              placeholder={row.label || "Enter websiteList"}
              required
            />
          </div>

          <div className="col-2">
            <div className="action-btns-portal">
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={() => handleAddDigitalSpendsRow(row.id)}
              >
                Build Connection
              </button>
            </div>
          </div>
        </div>
      ))}

      <ButtonComponent
        btnClass={"btn btn-primary"}
        btnName={"Save The Details"}
        onClick={handleSubmit}
      ></ButtonComponent>
    </>
  );
};

export default PortalForm;
