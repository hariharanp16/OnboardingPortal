import React from "react";
import ButtonComponent from "../../common/button/ButtonComponent";

const PortalsTracker = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>john_doe</td>
            <td>pass1234 </td>
            <td>john.doe@example.com </td>
            <td>User</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>jane_smith</td>
            <td>qwerty5678 </td>
            <td>jane.smith@example.com</td>
            <td>Admin</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>bob_builder</td>
            <td>builder789 </td>
            <td>bob_builder@example.com </td>
            <td>Moderator</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>admin_master</td>
            <td>admin@9876 </td>
            <td>admin_master@example.com </td>
            <td>Super Admin</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>test_user1</td>
            <td>testpass1 </td>
            <td>test_user1@example.com </td>
            <td>Tester</td>
            <td>
              <ButtonComponent btnClass={"btn btn-danger"} btnName={"Remove"} />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>guest_account</td>
            <td>guest@password </td>
            <td>guest_account@example.com </td>
            <td>Guest</td>
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
