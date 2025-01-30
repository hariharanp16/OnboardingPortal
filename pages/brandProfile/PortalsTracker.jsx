import React from "react";
import ButtonComponent from "../../common/button/ButtonComponent";

const PortalsTracker = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Marketplace</th>
            <th scope="col">Socialwatch</th>
            <th scope="col">Digital Spends</th>
            <th scope="col">Website Performance</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Amazon</td>
            <td>Facebook</td>
            <td>DV360</td>
            <td>Page Speed Insights</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Amazon Advertising </td>
            <td>Twitter</td>
            <td>Facebook Advertising</td>
            <td>SEOptimer Shoppify</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Flipkart Advertising</td>
            <td>Instagram </td>
            <td>Google Adwords</td>
            <td>SEMRush</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Big Basket Advertising</td>
            <td>Instagram </td>
            <td>Google Adwords</td>
            <td>SEMRush</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Blinkit Advertising</td>
            <td>Instagram </td>
            <td>Google Adwords</td>
            <td>SEMRush</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PortalsTracker;
