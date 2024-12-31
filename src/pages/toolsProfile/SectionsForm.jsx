import React, { useState } from "react";
import InputField from "../../common/input/Input";
import ButtonComponent from "../../common/button/ButtonComponent";

const SectionsForm = () => {
  const initialRows = [
    { id: 1, label: "Marketplace", value: "", checked: false },
    { id: 2, label: "Category", value: "", checked: false },
    { id: 3, label: "Sub-Category", value: "", checked: false },
    { id: 4, label: "Brand", value: "", checked: false },
  ];

  const [rows, setRows] = useState(initialRows);

  // Add a new row below the clicked row
  const handleAddRow = (index) => {
    const newRow = {
      id: new Date().getTime(), // Unique ID
      label: "", // No label for new rows
      value: "",
      checked: false,
    };

    const updatedRows = [...rows];
    updatedRows.splice(index + 1, 0, newRow); // Insert the new row below the current row
    setRows(updatedRows);
  };

  // Remove a specific row
  const handleRemoveRow = (id) => {
    if (rows.length > 1) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  // Update a row's value or checkbox
  const handleRowChange = (id, field, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  return (
    <>
      {rows.map((row, index) => (
        <div key={row.id} className="row align-items-center mb-3">
          <div className="col-md-10">
            {row.label && <label>{row.label}</label>}
            <input
              type="text"
              className="form-control"
              value={row.value}
              onChange={(e) => handleRowChange(row.id, "value", e.target.value)}
              placeholder={row.label || "Enter value"}
              required
            />
          </div>

          <div className="col-md-2">
            <input
              type="checkbox"
              checked={row.checked}
              onChange={(e) =>
                handleRowChange(row.id, "checked", e.target.checked)
              }
            />
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => handleAddRow(index)}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleRemoveRow(row.id)}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionsForm;
