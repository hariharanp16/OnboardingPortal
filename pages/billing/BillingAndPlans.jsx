import React from "react";
import "./BillingAndPlans.css";

const BillingAndPlans = () => {
  const handleUpgradePlans = () => {
    window.open("https://www.kieverse.ai/pricing.html", "_blank");
  };
  return (
    <>
      <div class="main-container">
        <div class="tabs-container">
          <div class=" my-2">
            <div class="row text-start g-4">
              <div class="col-md-4">
                <div class="plan-container active" id="basic-plan">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    onclick="toggleBackground(this)"
                    checked
                  />
                  <div class="content">
                    <h3>Basic Plan</h3>
                    <h1 class="fw-bold">$20/mth</h1>
                    <p class="fs-5">
                      Selected Tool: <strong>Digi-Cadence</strong>
                    </p>
                    <ul class="text-muted">
                      <li>Up to 10 user access</li>
                      <li>Unlimited reports downloads</li>
                      <li>Create unlimited projects</li>
                      <li>Advanced reporting and analytics</li>
                      <li>Priority chat and email support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="plan-container" id="advanced-plan">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    onclick="toggleBackground(this)"
                  />
                  <div class="content">
                    <h3>Advanced Plan</h3>
                    <h1 class="fw-bold">$30/mth</h1>
                    <p class="fs-5">
                      Tool Access: <strong>Any two</strong>
                    </p>
                    <ul class="text-muted">
                      <li>Up to 10 user access</li>
                      <li>Unlimited reports downloads</li>
                      <li>Create unlimited projects</li>
                      <li>Advanced reporting and analytics</li>
                      <li>Priority chat and email support</li>
                    </ul>
                    <div class="d-flex justify-content-center">
                      <button
                        class="btn btn-danger text-center"
                        onclick={handleUpgradePlans}
                      >
                        Upgrade now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="plan-container" id="pro-plan">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    onclick="toggleBackground(this)"
                  />
                  <div class="content">
                    <h3>Pro Plan</h3>
                    <h1 class="fw-bold">$40/mth</h1>
                    <p class="fs-5">
                      Tool Access: <strong>All</strong>
                    </p>
                    <ul class="text-muted">
                      <li>Up to 10 user access</li>
                      <li>Unlimited reports downloads</li>
                      <li>Create unlimited projects</li>
                      <li>Advanced reporting and analytics</li>
                      <li>Priority chat and email support</li>
                    </ul>
                    <div class="d-flex justify-content-center">
                      <button
                        class="btn btn-danger text-center"
                        onclick={handleUpgradePlans}
                      >
                        Upgrade now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="my-5">
            <h2 class="fw-bold mb-4">Billing History</h2>
            <div class="table-responsive">
              <table class="table billing-table">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        id="select-all"
                        onclick="selectAllRows(this)"
                      />
                    </th>
                    <th class="fs-5" style={{ width: "40%" }}>
                      Invoice
                    </th>
                    <th class="fs-5 " style={{ width: "15%" }}>
                      Amount
                    </th>
                    <th class="fs-5" style={{ width: "15%" }}>
                      Date
                    </th>
                    <th class="fs-5" style={{ width: "15%" }}>
                      Status
                    </th>
                    <th class="fs-5" style={{ width: "15%" }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" class="select-row" />
                    </td>
                    <td>Basic Plan - Dec 2024</td>
                    <td>USD $20.00</td>
                    <td>Dec 1, 2024</td>
                    <td>
                      <span class="status-paid">Paid</span>
                    </td>
                    <td>
                      <span class="action-download">Download</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <input type="checkbox" class="select-row" />
                    </td>
                    <td>Basic Plan - Nov 2024</td>
                    <td>USD $20.00</td>
                    <td>Nov 1, 2024</td>
                    <td>
                      <span class="status-paid">Paid</span>
                    </td>
                    <td>
                      <span class="action-download">Download</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" class="select-row" />
                    </td>
                    <td>Basic Plan - Oct 2024</td>
                    <td>USD $20.00</td>
                    <td>Oct 1, 2024</td>
                    <td>
                      <span class="status-paid">Paid</span>
                    </td>
                    <td>
                      <span class="action-download">Download</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" class="select-row" />
                    </td>
                    <td>Basic Plan - Sep 2024</td>
                    <td>USD $20.00</td>
                    <td>Sep 1, 2024</td>
                    <td>
                      <span class="status-paid">Paid</span>
                    </td>
                    <td>
                      <span class="action-download">Download</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" class="select-row" />
                    </td>
                    <td>Basic Plan - Aug 2024</td>
                    <td>USD $20.00</td>
                    <td>Aug 1, 2024</td>
                    <td>
                      <span class="status-paid">Paid</span>
                    </td>
                    <td>
                      <span class="action-download">Download</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" class="select-row" />
                    </td>
                    <td>Basic Plan - Jul 2024</td>
                    <td>USD $20.00</td>
                    <td>Jul 1, 2024</td>
                    <td>
                      <span class="status-paid">Paid</span>
                    </td>
                    <td>
                      <span class="action-download">Download</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" class="select-row" />
                    </td>
                    <td>Basic Plan - Jun 2024</td>
                    <td>USD $20.00</td>
                    <td>Jun 1, 2024</td>
                    <td>
                      <span class="status-paid">Paid</span>
                    </td>
                    <td>
                      <span class="action-download">Download</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" class="select-row" />
                    </td>
                    <td>Basic Plan - May 2024</td>
                    <td>USD $20.00</td>
                    <td>May 1, 2024</td>
                    <td>
                      <span class="status-paid">Paid</span>
                    </td>
                    <td>
                      <span class="action-download">Download</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" class="select-row" />
                    </td>
                    <td>Basic Plan - Apr 2024</td>
                    <td>USD $20.00</td>
                    <td>Apr 1, 2024</td>
                    <td>
                      <span class="status-paid">Paid</span>
                    </td>
                    <td>
                      <span class="action-download">Download</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BillingAndPlans;
