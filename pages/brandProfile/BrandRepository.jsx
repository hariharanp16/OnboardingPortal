import React from "react";
import ButtonComponent from "../../common/button/ButtonComponent";

const BrandRepository = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Category</th>
            <th scope="col">Sub Category</th>
            <th scope="col">Sub Category L2</th>
            <th scope="col">Brand</th>
            <th scope="col">Sub Brand</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Beauty</td>
            <td>Compact Powder </td>
            <td>Face Cream</td>
            <td>Lakme</td>
            <td>Lakme</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Beauty</td>
            <td>Body Butters </td>
            <td>Body Lotions</td>
            <td>Pure Sense</td>
            <td>Pure Sense</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Beauty</td>
            <td>Hair Styling </td>
            <td>Hair Styling Serum</td>
            <td>Livon</td>
            <td>Livon</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BrandRepository;
