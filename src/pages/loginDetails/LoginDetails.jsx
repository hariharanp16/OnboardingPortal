import React, { useState } from "react";
import InputField from "../../common/input/Input";
import ButtonComponent from "../../common/button/ButtonComponent";
import "../Login.css";

function LoginDetails() {
  const [error, setError] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [websiteName, setWebsiteName] = useState("");
  const [orgCategory, setOrgCategory] = useState("");
  const [geography, setGeography] = useState("");
  const [brandList, setBrandList] = useState("");
  const [brandSites, setBrandSites] = useState("");
  const [brandCategory, setBrandCategory] = useState("");
  const [brandSubCategory, setBrandSubCategory] = useState("");
  const [formPageSwap, setFormPageSwap] = useState(false);

  const handleFormPage = () => {
    setFormPageSwap(!formPageSwap);
  };
  const handleFormSubmit = () => {
    console.log("FormSubmited");
  };

  return (
    <>
      <section class="main-content">
        <div class="row justify-content-center g-0">
          <div class="col-6">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginDetails;
