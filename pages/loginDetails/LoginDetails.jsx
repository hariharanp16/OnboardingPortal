import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../common/input/Input";
import ButtonComponent from "../../common/button/ButtonComponent";
import OrganizationIcon from "../../assets/images/multi-channel-marketing-line-icon-vector.svg";
import BrandsIcon from "../../assets/images/organization-1.svg";
import "../Login.css";

function LoginDetails() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [websiteName, setWebsiteName] = useState("");
  const [orgCategory, setOrgCategory] = useState("");
  const [geography, setGeography] = useState("");
  const [brandList, setBrandList] = useState("");
  const [brandSites, setBrandSites] = useState("");
  const [formPageSwap, setFormPageSwap] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayBrandForm, setDisplayBrandForm] = useState(false);

  const handleFormPage = () => {
    setFormPageSwap(!formPageSwap);
  };
  const handleFormSubmit = () => {
    console.log("FormSubmited");
  };
  const handleFormDisplay = () => {
    setDisplayForm((prev) => !prev);
  };
  const handleFormBrand = () => {
    setDisplayBrandForm((prev) => !prev);
  };
  const handleSaveInfo = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <section class="login-content">
        <div class="row justify-content-center align-items-center g-5 w-100 h-100">
          <div class={`animate-div ${displayForm ? "col-6 " : "col-3"}`}>
            <div class="card">
              <div class="card-body">
                {/* <span className="step-count"></span> */}
                <h3 class="card-title">User Details</h3>

                {displayForm ? (
                  <form action="" class="login-details-form">
                    <InputField
                      label={"First Name"}
                      type="text"
                      value={orgName}
                      // onChange={(e) => setEmail(e.target.value)}
                      // placeholder="Email"
                      error={error}
                      required={true}
                    ></InputField>
                    <InputField
                      label={"Last Name"}
                      type="text"
                      value={orgName}
                      // onChange={(e) => setEmail(e.target.value)}
                      // placeholder="Email"
                      error={error}
                      required={true}
                    ></InputField>
                    <InputField
                      label={"Designation"}
                      type="text"
                      value={orgName}
                      // onChange={(e) => setEmail(e.target.value)}
                      // placeholder="Email"
                      error={error}
                      required={true}
                    ></InputField>

                    <InputField
                      label={"Name of the Organization"}
                      type="text"
                      value={orgName}
                      // onChange={(e) => setEmail(e.target.value)}
                      // placeholder="Email"
                      error={error}
                      required={true}
                    ></InputField>

                    <InputField
                      label={"Organization Website"}
                      type="text"
                      value={websiteName}
                      // onChange={(e) => setEmail(e.target.value)}
                      // placeholder="Email"
                      error={error}
                      required={true}
                    ></InputField>

                    <InputField
                      label={"Organization Category"}
                      type="text"
                      value={orgCategory}
                      // onChange={(e) => setEmail(e.target.value)}
                      // placeholder="Email"
                      error={error}
                      required={true}
                    ></InputField>

                    <InputField
                      label={"Geography"}
                      type="text"
                      value={geography}
                      // onChange={(e) => setEmail(e.target.value)}
                      // placeholder="Email"
                      error={error}
                      required={true}
                    ></InputField>

                    <ButtonComponent
                      btnClass={"btn btn-primary"}
                      id={"nextBtn"}
                      btnName={"Save"}
                      onClick={handleSaveInfo}
                    ></ButtonComponent>
                  </form>
                ) : (
                  <>
                    <img
                      src={OrganizationIcon}
                      className="LoginDetailsIcons"
                      alt=""
                    />
                    <p class="card-text text-center">
                      Provide the basic details related to your organization and
                      account
                    </p>
                    <ButtonComponent
                      btnClass={"btn btn-primary"}
                      btnName={"Add Personal Info"}
                      onClick={handleFormDisplay}
                    ></ButtonComponent>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* <div class={`animate-div ${displayBrandForm ? "col-6 " : "col-3"}`}>
            <div class="card">
              <div class="card-body">
                <span className="step-count"></span>
                <h3 class="card-title">Brand Details</h3>

                {displayBrandForm ? (
                  <form action="" class="login-details-form">
                    <InputField
                      label={"Brands List"}
                      type="text"
                      value={brandList}
                       
                      error={error}
                      required={true}
                    ></InputField>
                     
                   
                    <div class="btn-container">
                      <ButtonComponent
                        btnClass={"btn btn-primary"}
                        id={"nextBtn"}
                        btnName={"Submit"}
                        onClick={handleFormSubmit}
                      ></ButtonComponent>
                    </div>
                  </form>
                ) : (
                  <>
                    <img
                      src={BrandsIcon}
                      className="LoginDetailsIcons"
                      alt=""
                    />
                    <p class="card-text text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris interdum pretium molestie.
                    </p>
                    <ButtonComponent
                      btnClass={"btn btn-primary"}
                      btnName={"Add Brand Details"}
                      onClick={handleFormBrand}
                    ></ButtonComponent>
                  </>
                )}
              </div>
            </div>
          </div> */}
          {/* <div class="col-6">
            <h3 class="text-center" id="formTitle">
              {!formPageSwap ? "Organization Description" : "Brand Description"}
            </h3>
            <div class="form-main-container">
              <div
                class="form-ac-container"
                style={{
                  transform: formPageSwap ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                id="box"
              >
                <form action="" class="login-form-details" id="form1">
                  <InputField
                    label={"Name of the Organization"}
                    type="text"
                    value={orgName}
                    // onChange={(e) => setEmail(e.target.value)}
                    // placeholder="Email"
                    error={error}
                    required={true}
                  ></InputField>

                  <InputField
                    label={"Company Website"}
                    type="text"
                    value={websiteName}
                    // onChange={(e) => setEmail(e.target.value)}
                    // placeholder="Email"
                    error={error}
                    required={true}
                  ></InputField>

                  <InputField
                    label={"Organization Category"}
                    type="text"
                    value={orgCategory}
                    // onChange={(e) => setEmail(e.target.value)}
                    // placeholder="Email"
                    error={error}
                    required={true}
                  ></InputField>

                  <InputField
                    label={"Geography"}
                    type="text"
                    value={geography}
                    // onChange={(e) => setEmail(e.target.value)}
                    // placeholder="Email"
                    error={error}
                    required={true}
                  ></InputField>

                  <ButtonComponent
                    btnClass={"btn btn-primary"}
                    id={"nextBtn"}
                    btnName={"Next"}
                    onClick={handleFormPage}
                  ></ButtonComponent>
                </form>
                <form action="" class="login-form-details" id="form2">
                  <InputField
                    label={"Brands List"}
                    type="text"
                    value={brandList}
                    // onChange={(e) => setEmail(e.target.value)}
                    // placeholder="Email"
                    error={error}
                    required={true}
                  ></InputField>
                  <InputField
                    label={"Brand Websites"}
                    type="text"
                    value={brandSites}
                    // onChange={(e) => setEmail(e.target.value)}
                    // placeholder="Email"
                    error={error}
                    required={true}
                  ></InputField>
                  <InputField
                    label={"Brand Category"}
                    type="text"
                    value={brandCategory}
                    // onChange={(e) => setEmail(e.target.value)}
                    // placeholder="Email"
                    error={error}
                    required={true}
                  ></InputField>
                  <InputField
                    label={"Brand Sub Category"}
                    type="text"
                    value={brandSubCategory}
                    // onChange={(e) => setEmail(e.target.value)}
                    // placeholder="Email"
                    error={error}
                    required={true}
                  ></InputField>
                  <InputField
                    label={"Brand Sub Category"}
                    type="text"
                    value={brandSubCategory}
                    // onChange={(e) => setEmail(e.target.value)}
                    // placeholder="Email"
                    error={error}
                    required={true}
                  ></InputField>
                  <div class="login-form-wrapper mb-3">
                    <label for="" class="form-label">
                      Tool Description
                    </label>
                    <p>
                      Digi-Cadence
                      <small>
                        Unlock your brand's true potential in the digital world.
                      </small>
                    </p>
                  </div>
                  <div class="btn-container">
                    <ButtonComponent
                      btnClass={"btn btn-primary"}
                      id={"nextBtn"}
                      btnName={"Back"}
                      onClick={handleFormPage}
                    ></ButtonComponent>
                    <ButtonComponent
                      btnClass={"btn btn-primary"}
                      id={"nextBtn"}
                      btnName={"Submit"}
                      onClick={handleFormSubmit}
                    ></ButtonComponent>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default LoginDetails;
