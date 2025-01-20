import React, { useEffect, useState } from "react";
import TabComponent from "../../components/tabs/TabComponent";
import ButtonComponent from "../../common/button/ButtonComponent";
import InputField from "../../common/input/Input";
import SectionsForm from "./SectionsForm";
import PortalForm from "./PortalForm";
import MultiSelectDropdown from "../../components/MultiSelectDropdown/MultiSelectDropdown";
import { getCategory } from "../../services/category";

const ToolsProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allData, setAllData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [subCategoriesL2, setSubCategoriesL2] = useState([]);
  const [selectedSubCategoriesL2, setSelectedSubCategoriesL2] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [subBrands, setSubBrands] = useState([]);
  const [selectedSubBrands, setSelectedSubBrands] = useState([]);
  const [submit, setSubmit] = useState([]);
  const [formData, setFormData] = useState({
    selectedCategories: "",
    subCategories: "",
    selectedSubCategoriesL2: "",
    selectedBrands: "",
    selectedSubBrands: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategory();
        const setAllData = data;
        const uniqueCategories = [
          ...new Map(
            data.map((cat) => [
              cat.category,
              { id: cat.id, label: cat.category },
            ])
          ).values(),
        ];
        setCategories(uniqueCategories);

        console.log("categories", data);
      } catch (error) {
        console.log("Fetch Error categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  console.log("selectedCategories", selectedCategories);
  useEffect(() => {
    if (selectedCategories) {
      const relatedSubcategories = allData;
      console.log("relatedSubcategories:", relatedSubcategories);
      setSubCategories(relatedSubcategories);
    } else {
      setSubCategories([]); // Reset subcategories when no category is selected
    }
  }, []);

  const [rows, setRows] = useState([
    { category: "", subCategory: "", brands: "", subBrands: "" },
  ]);

  const listCategories = () => {
    setCategories((prev) => ({
      ...prev,
    }));
  };

  // Handle Category change

  const handleCategoryChange = async (selectedOptions) => {
    setSelectedCategories(selectedOptions);
    if (selectedOptions.length > 0) {
      setSelectedCategories(selectedOptions);
    }
  };
  // Handle Sub Category change

  const handleSubCategoryChange = async (selectedOptions) => {
    setSelectedSubCategories(selectedOptions);
    if (selectedOptions.length > 0) {
      setSelectedSubCategories(selectedOptions);
    }
  };

  const handleSubmitOrg = (e) => {
    e.preventDefault();
    // Save form data to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data saved to localStorage!");
  };
  const savedFormData = JSON.parse(localStorage.getItem("formData"));
  console.log("savedFormData:", savedFormData);

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

  const tabs = [
    {
      label: (
        <>
          <div className="tab-label-title">
            <span className="label-title">Organizations & Brands</span>
            <small>(For Digi-Cadence, Meta-360 & SOV)</small>
          </div>
        </>
      ),
      content: (
        <div>
          <div className="row">
            <div className="col-12">
              <form id="dynamicForm" onSubmit={handleSubmitOrg}>
                <div id="dynamicRowsContainer">
                  <ul className="list-description">
                    <li>
                      You can select the brands and categories as per the plan
                      subscribed.
                    </li>
                    <li>
                      Once the fields are saved , please go to Database to
                      remove the brands and categories information from Brand
                      Repository
                    </li>
                    <li>To Add New Brand/Category , click on add button.</li>
                    <li>
                      To remove or modify the detail before saving , select
                      again the options from the drop down
                    </li>
                    <li>
                      For each Brand or sub brand , only 1 category and 1 sub
                      category is to be selected. you can add multiple sub
                      category l2
                    </li>
                    <li>
                      If the brand name is not present in the drop down , please
                      type the correct spelling of the brand and save it.
                    </li>
                  </ul>
                  {rows.map((row, index) => (
                    <div
                      className="row align-items-center mb-3 dynamic-row"
                      key={index}
                    >
                      <div className=" col-md-2">
                        <MultiSelectDropdown
                          options={categories}
                          selectedValues={selectedCategories}
                          onChange={handleCategoryChange}
                          placeholder="Select Category"
                        />
                      </div>
                      <div className=" col-md-2">
                        <MultiSelectDropdown
                          options={subCategories}
                          selectedValues={selectedSubCategories}
                          onChange={handleSubCategoryChange}
                          placeholder="Selec Category L1"
                        />
                      </div>
                      <div className=" col-md-2">
                        <MultiSelectDropdown
                          options={subCategoriesL2}
                          selectedValues={selectedSubCategoriesL2}
                          onChange={handleSubCategoryChange}
                          placeholder="Select Category L2"
                        />
                      </div>
                      <div className=" col-md-2">
                        <MultiSelectDropdown
                          options={brands}
                          selectedValues={selectedBrands}
                          onChange={handleSubCategoryChange}
                          placeholder="Select Brands"
                        />
                      </div>
                      <div className="col-md-2">
                        <MultiSelectDropdown
                          options={subBrands}
                          selectedValues={selectedSubBrands}
                          onChange={handleSubCategoryChange}
                          placeholder="Select Sub Brands"
                        />
                      </div>

                      <div className="col-md-2">
                        <div className="action-btns">
                          <ButtonComponent
                            btnClass={"btn btn-primary"}
                            btnName={"+"}
                            onClick={handleAddRow}
                          ></ButtonComponent>
                          <ButtonComponent
                            btnClass={"btn btn-danger"}
                            btnName={"-"}
                            onClick={() => handleRemoveRow(index)}
                          ></ButtonComponent>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <ButtonComponent
                  btnClass={"btn btn-danger"}
                  btnName={"Submit"}
                  type="submit"
                ></ButtonComponent>
              </form>
            </div>
          </div>
        </div>
      ),
    },

    {
      label: (
        <div className="tab-label-title">
          <span className="label-title">Section Details</span>
          <small>(For Digi-Cadence)</small>
        </div>
      ),
      content: (
        <>
          <SectionsForm />
        </>
      ),
    },

    {
      label: (
        <div className="tab-label-title">
          <span className="label-title">Portal Details</span>
          <small>(For Digi-Cadence & Spendverse)</small>
        </div>
      ),

      content: (
        <>
          <PortalForm />
        </>
      ),
    },
  ];
  return (
    <div className="m-3 tabs-container">
      <div className="row">
        <div className="col-sm-12 col-md-3">
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
        <div className="col-sm-12 col-md-3">
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
        <div className="col-sm-12 col-md-3">
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
      <TabComponent tabs={tabs} className="tabs-component" />
    </div>
  );
};

export default ToolsProfile;
