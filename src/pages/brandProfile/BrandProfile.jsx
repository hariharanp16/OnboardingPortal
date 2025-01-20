import React from "react";
import BrandRepository from "./BrandRepository";
import PortalsTracker from "./PortalsTracker";
import CredentialsDetails from "./CredentialsDetails";
import UsersList from "./UsersList";
import TabComponent from "../../components/tabs/TabComponent";

function BrandProfile() {
  const tabs = [
    {
      label: "Brands Repository",
      content: (
        <>
          <BrandRepository />
        </>
      ),
    },

    {
      label: "Portals Tracker",
      content: (
        <>
          <PortalsTracker />
        </>
      ),
    },

    {
      label: "Credentials Details",

      content: (
        <>
          <CredentialsDetails />
        </>
      ),
    },
    {
      label: "Users List",

      content: (
        <>
          <UsersList />
        </>
      ),
    },
  ];
  return (
    <div class="brand-profile main-container">
      <div class="sectionTitle text-center mb-4">
        <h3>Database</h3>
        <div className="row">
          <div className="col-12">
            <TabComponent tabs={tabs} className="tabs-component" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandProfile;
