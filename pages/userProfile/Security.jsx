import React, { useState } from "react";
import InputField from "../../common/input/Input";
import ButtonComponent from "../../common/button/ButtonComponent";

const Security = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSavePassword = () => {
    if (oldPassword && newPassword !== "") {
      alert("password changed Successfullty");
    } else {
      alert("Please fill required columns");
    }
  };

  return (
    <>
      <div class="main-container">
        <div class="card">
          <div class="card-header text-center">
            <h3>Security</h3>
          </div>
          <div class="card-body">
            <form id="changePasswordForm">
              <div class="mb-3">
                <InputField
                  containerClass={"flex-column"}
                  label={"Old Password"}
                  type="text"
                  value={oldPassword}
                  // onChange={(e) => setEmail(e.target.value)}
                  // placeholder="Email"
                  error={error}
                  required={true}
                ></InputField>
              </div>
              <div class="mb-3">
                <InputField
                  containerClass={"flex-column"}
                  label={"New Password"}
                  type="text"
                  value={newPassword}
                  // onChange={(e) => setEmail(e.target.value)}
                  // placeholder="Email"
                  error={error}
                  required={true}
                ></InputField>
              </div>
              <div class="mb-3">
                <InputField
                  containerClass={"flex-column"}
                  label={"Confirm Password"}
                  type="text"
                  value={confirmPassword}
                  // onChange={(e) => setEmail(e.target.value)}
                  // placeholder="Email"
                  error={error}
                  required={true}
                ></InputField>
              </div>
              <ButtonComponent
                btnClass={"btn btn-primary"}
                btnName={"Save Changes"}
                onClick={handleSavePassword}
              ></ButtonComponent>
            </form>
            <div
              id="errorMessage"
              class="text-danger mt-3"
              style={{ display: "none" }}
            >
              <p>New password and confirm password do not match.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
