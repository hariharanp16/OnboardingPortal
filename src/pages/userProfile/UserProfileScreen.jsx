import React, { useState } from "react";
import InputField from "../../common/input/Input";
import ButtonComponent from "../../common/button/ButtonComponent";

const UserProfileScreen = () => {
  const [coverPhoto, setCoverPhoto] = useState(
    "https://via.placeholder.com/800x200"
  );
  const [profilePhoto, setProfilePhoto] = useState(
    "https://via.placeholder.com/100"
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [error, setError] = useState();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Generate a preview URL for the new photo
      const newPhotoURL = URL.createObjectURL(file);
      setProfilePhoto(newPhotoURL);

      // You can handle file upload here if necessary
      console.log("Selected File:", file);
    }
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newCoverPhotoURL = URL.createObjectURL(file);
      setCoverPhoto(newCoverPhotoURL);
      console.log("coverPhoto:", file);
    }
  };
  return (
    <>
      <div class="profilePageMain">
        <div class="cover-photo">
          <img
            id="coverPhoto"
            class="cover-photo"
            src={coverPhoto}
            alt="Cover Photo"
          />
          <label for="coverPhotoInput" class="custom-file-label">
            Change Cover
          </label>
          <input
            type="file"
            id="coverPhotoInput"
            style={{ display: "none" }}
            onChange={handleCoverChange}
            accept="image/*"
          />
        </div>

        <div class="profile-container">
          <div className="profile-photo-container">
            <img
              id="profilePhoto"
              className="profile-photo"
              src={profilePhoto}
              alt="Profile Photo"
            />
            <label htmlFor="profilePhotoInput" className="upload-profile-btn">
              Change Profile
            </label>
            <input
              type="file"
              id="profilePhotoInput"
              style={{ display: "none" }} // Hide the file input
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </div>
          <div className="profile-details">
            <span id="displayName" class="profile-name">
              Display Name
            </span>
            <p id="displayEmail" class="profile-email">
              Email Address
            </p>
          </div>
        </div>

        <div class="profile-form-container">
          <form id="profileForm" className="container-fluid">
            <div class="row">
              <div class="col-md-4 mb-3">
                <InputField
                  containerClass={"flex-column"}
                  label={"First Name"}
                  type="text"
                  value={firstName}
                  // onChange={(e) => setEmail(e.target.value)}
                  // placeholder="Email"
                  error={error}
                  required={true}
                ></InputField>
              </div>
              <div class="col-md-4 mb-3">
                <InputField
                  containerClass={"flex-column"}
                  label={"Last Name"}
                  type="text"
                  value={lastName}
                  // onChange={(e) => setEmail(e.target.value)}
                  // placeholder="Email"
                  error={error}
                  required={true}
                ></InputField>
              </div>
              <div class="col-md-4 mb-3">
                <InputField
                  containerClass={"flex-column"}
                  label={"Display Name"}
                  type="text"
                  value={displayName}
                  // onChange={(e) => setEmail(e.target.value)}
                  // placeholder="Email"
                  error={error}
                  required={true}
                ></InputField>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 mb-3">
                <InputField
                  containerClass={"flex-column"}
                  label={"Email"}
                  type="text"
                  value={userEmail}
                  // onChange={(e) => setEmail(e.target.value)}
                  // placeholder="Email"
                  error={error}
                  required={true}
                ></InputField>
              </div>

              <div class="col-md-4 mb-3">
                <label for="role" class="form-label">
                  Role
                </label>
                <select name="role" id="role" class="form-control">
                  <option value="" disabled selected></option>
                  <option value="Product/Project Manager">
                    Product/Project Manager
                  </option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 mb-3">
                <label for="emailNotification">
                  Email Notification Options
                </label>
                <select class="form-control" id="emailNotification">
                  <option value="" disabled selected></option>
                  <option>All</option>
                  <option>Important Only</option>
                  <option>None</option>
                </select>
              </div>
            </div>
            <ButtonComponent
              btnClass={"btn btn-primary"}
              btnName={"Save Changes"}
            ></ButtonComponent>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfileScreen;
