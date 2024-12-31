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
      {marketplaceRow.map((row) => (
        <div className="row" key={row.id}>
          <div className="col-12">
            <h4>Marketplace</h4>
          </div>
          <div className="col">
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
          <div className="col">
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
          <div className="col">
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
          <div className="col">
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
          <div className="col">
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => handleAddMarketPlaceRow(row.id)}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleRemoveMarketPlaceRow(row.id)}
              disabled={marketplaceRow.length === 1}
            >
              -
            </button>
          </div>
        </div>
      ))}
      {socialWatchRow.map((row) => (
        <div className="row" key={row.id}>
          <div className="col-12">
            <h4>Social Watch</h4>
          </div>
          <div className="col">
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
          <div className="col">
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
          <div className="col">
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
          <div className="col">
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
          <div className="col">
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => handleAddSocialWatchRow(row.id)}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleRemoveSocialWatchRow(row.id)}
              disabled={socialWatchRow.length === 1}
            >
              -
            </button>
          </div>
        </div>
      ))}
      {digitalSpendsRow.map((row) => (
        <div className="row" key={row.id}>
          <div className="col-12">
            <h4>Digital Spends</h4>
          </div>
          <div className="col">
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
          <div className="col">
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
          <div className="col">
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
          <div className="col">
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
          <div className="col">
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
          <div className="col">
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => handleAddDigitalSpendsRow(row.id)}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleRemoveSocialWatchRow(row.id)}
              disabled={digitalSpendsRow.length === 1}
            >
              -
            </button>
          </div>
        </div>
      ))}
      {organicRow.map((row) => (
        <div className="row" key={row.id}>
          <div className="col-12">
            <h4>Organic Performance</h4>
          </div>
          <div className="col">
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
          <div className="col">
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

          <div className="col">
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => handleAddDigitalSpendsRow(row.id)}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleRemoveSocialWatchRow(row.id)}
              disabled={organicRow.length === 1}
            >
              -
            </button>
          </div>
        </div>
      ))}

      <ButtonComponent
        btnClass={"btn btn-primary"}
        btnName={"Submit All"}
        onClick={handleSubmit}
      ></ButtonComponent>
    </>
  );
};

export default PortalForm;
