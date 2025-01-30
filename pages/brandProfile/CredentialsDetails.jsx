import React from "react";
import ButtonComponent from "../../common/button/ButtonComponent";
import { FaRegTrashAlt } from "react-icons/fa";

const CredentialsDetails = () => {
  return (
    <div>
      <table class="table table-responsive">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Section</th>
            <th scope="col">Portal/Handle Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Property Id</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Marketplace</td>
            <td>Portal name </td>
            <td>Nikhil </td>
            <td>234</td>
            <td>
              <FaRegTrashAlt />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Social Watch</td>
            <td>Handle name</td>
            <td>Handle Url </td>
            <td>Livon</td>
            <td>
              <FaRegTrashAlt />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Digital Spends</td>
            <td>Portal name </td>
            <td>Hari </td>
            <td>234</td>
            <td>
              <FaRegTrashAlt />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CredentialsDetails;
