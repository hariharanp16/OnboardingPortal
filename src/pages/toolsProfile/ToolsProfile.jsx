import React, { useState } from "react";
import TabComponent from "../../components/tabs/TabComponent";
import ButtonComponent from "../../common/button/ButtonComponent";
import InputField from "../../common/input/Input";
import SectionsForm from "./SectionsForm";
import PortalForm from "./PortalForm";

const ToolsProfile = () => {
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);

  const [rows, setRows] = useState([
    { brands: "", category: "", subCategory: "", subBrands: "" },
  ]);

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Add a new row
  const handleAddRow = () => {
    setRows([
      ...rows,
      { brands: "", category: "", subCategory: "", subBrands: "" },
    ]);
  };

  // Remove a row
  const handleRemoveRow = (index) => {
    if (rows.length > 1) {
      setRows(rows.filter((_, i) => i !== index));
    } else {
      alert("At least one row must be present!");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", rows);
  };
  const tabs = [
    {
      label: "Organizations & Brands",
      content: (
        <div>
          <div className="row">
            <div className="col-12">
              <form id="dynamicForm" onSubmit={handleSubmit}>
                <div id="dynamicRowsContainer">
                  {rows.map((row, index) => (
                    <div
                      className="row align-items-center mb-3 dynamic-row"
                      key={index}
                    >
                      <div className="mb-3 col-md-2 numbered-label ms-5">
                        <label
                          htmlFor={`brands-${index}`}
                          className="form-label"
                        ></label>
                        <input
                          type="text"
                          className="form-control brands"
                          placeholder="Brands"
                          required
                          value={row.brands}
                          onChange={(e) =>
                            handleInputChange(index, "brands", e.target.value)
                          }
                        />
                      </div>

                      <div className="mb-3 col-md-2 numbered-label ms-5">
                        <label
                          htmlFor={`category-${index}`}
                          className="form-label"
                        ></label>
                        <input
                          type="text"
                          className="form-control category"
                          placeholder="Category"
                          required
                          value={row.category}
                          onChange={(e) =>
                            handleInputChange(index, "category", e.target.value)
                          }
                        />
                      </div>

                      <div className="mb-3 col-md-2 numbered-label ms-5">
                        <label
                          htmlFor={`subCategory-${index}`}
                          className="form-label"
                        ></label>
                        <input
                          type="text"
                          className="form-control subCategory"
                          placeholder="Sub Category"
                          required
                          value={row.subCategory}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "subCategory",
                              e.target.value
                            )
                          }
                        />
                      </div>

                      <div className="mb-3 col-md-2 numbered-label ms-5">
                        <label
                          htmlFor={`subBrands-${index}`}
                          className="form-label"
                        ></label>
                        <input
                          type="text"
                          className="form-control subBrands"
                          placeholder="Sub Brands"
                          required
                          value={row.subBrands}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "subBrands",
                              e.target.value
                            )
                          }
                        />
                      </div>

                      <div className="col-md-1 mt-2 btn-group d-flex justify-content-end ms-5">
                        <button
                          type="button"
                          className="btn add-Btn"
                          onClick={handleAddRow}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="btn remove-Btn"
                          onClick={() => handleRemoveRow(index)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      ),
    },

    {
      label: "Section Details",
      content: (
        <>
          <SectionsForm />
        </>
      ),
    },

    {
      label: "Portal Details",

      content: (
        <>
          <PortalForm />
        </>
      ),
    },
  ];
  return (
    <div class="tabs-container">
      <TabComponent tabs={tabs} className="tabs-component" />
    </div>
  );
};

export default ToolsProfile;
