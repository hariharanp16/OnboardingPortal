import React from "react";
import TabComponent from "../../components/tabs/TabComponent";
import ScatterChart from "../../components/scatterChart/ScatterChart";

const Usage = () => {
  const tabs = [
    {
      label: "Digi-Cadence",
      content: (
        <div>
          <div className="row">
            <div className="col-12">
              <form id="dynamicForm">
                <div id="dynamicRowsContainer">
                  <div class="row align-items-center mb-3 dynamic-row">
                    <div class="row">
                      <div class="col-md-6 mt-3">
                        <div class="fs-5 ps-4">Usage Chart</div>

                        <ScatterChart />
                      </div>

                      <div class="col-md-6 mt-3">
                        <div class="fs-5  ps-4">
                          Analytics Downloaded Reports
                        </div>
                        <ScatterChart />
                      </div>
                    </div>

                    <div class="card mt-5 col-md-5">
                      <div class="card-body">
                        <h4 class="card-title mb-4">Account Activity</h4>

                        <div class="d-flex justify-content-between align-items-center">
                          <h3 class="">1/2 Active</h3>
                          <span class="text-muted bg-light">1 Remaining</span>
                        </div>

                        <div class="d-flex align-items-center gap-3">
                          <div
                            class="progress w-100"
                            style={{ height: "20px" }}
                          >
                            <div
                              class="progress-bar progress-bar-inner"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="bg-light d-flex justify-content-between align-items-center">
                        <button
                          class="btn btn-light mt-1 mb-1"
                          onclick="manageAccounts()"
                        >
                          <i class="bi bi-file-earmark-richtext-fill text-muted"></i>

                          <span class="text-muted">Manage Active Accounts</span>
                        </button>
                        <i class="bi bi-chevron-right text-muted text-end"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ),
    },

    {
      label: "Spendverse",
      content: (
        <>
          <div className="row">
            <div className="col-12">
              <form id="dynamicForm">
                <div id="dynamicRowsContainer">
                  <div class="row align-items-center mb-3 dynamic-row">
                    <div class="row">
                      <div class="col-md-6 mt-3">
                        <div class="fs-5 ps-4">Usage Chart</div>

                        <ScatterChart />
                      </div>

                      <div class="col-md-6 mt-3">
                        <div class="fs-5  ps-4">
                          Analytics Downloaded Reports
                        </div>
                        <ScatterChart />
                      </div>
                    </div>

                    <div class="card mt-5 col-md-5">
                      <div class="card-body">
                        <h4 class="card-title mb-4">Account Activity</h4>

                        <div class="d-flex justify-content-between align-items-center">
                          <h3 class="">1/2 Active</h3>
                          <span class="text-muted bg-light">1 Remaining</span>
                        </div>

                        <div class="d-flex align-items-center gap-3">
                          <div
                            class="progress w-100"
                            style={{ height: "20px" }}
                          >
                            <div
                              class="progress-bar progress-bar-inner"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="bg-light d-flex justify-content-between align-items-center">
                        <button
                          class="btn btn-light mt-1 mb-1"
                          onclick="manageAccounts()"
                        >
                          <i class="bi bi-file-earmark-richtext-fill text-muted"></i>

                          <span class="text-muted">Manage Active Accounts</span>
                        </button>
                        <i class="bi bi-chevron-right text-muted text-end"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      ),
    },

    {
      label: "Meta 360",

      content: (
        <div>
          <div className="row">
            <div className="col-12">
              <form id="dynamicForm">
                <div id="dynamicRowsContainer">
                  <div class="row align-items-center mb-3 dynamic-row">
                    <div class="row">
                      <div class="col-md-6 mt-3">
                        <div class="fs-5 ps-4">Usage Chart</div>

                        <ScatterChart />
                      </div>

                      <div class="col-md-6 mt-3">
                        <div class="fs-5  ps-4">
                          Analytics Downloaded Reports
                        </div>
                        <ScatterChart />
                      </div>
                    </div>

                    <div class="card mt-5 col-md-5">
                      <div class="card-body">
                        <h4 class="card-title mb-4">Account Activity</h4>

                        <div class="d-flex justify-content-between align-items-center">
                          <h3 class="">1/2 Active</h3>
                          <span class="text-muted bg-light">1 Remaining</span>
                        </div>

                        <div class="d-flex align-items-center gap-3">
                          <div
                            class="progress w-100"
                            style={{ height: "20px" }}
                          >
                            <div
                              class="progress-bar progress-bar-inner"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="bg-light d-flex justify-content-between align-items-center">
                        <button
                          class="btn btn-light mt-1 mb-1"
                          onclick="manageAccounts()"
                        >
                          <i class="bi bi-file-earmark-richtext-fill text-muted"></i>

                          <span class="text-muted">Manage Active Accounts</span>
                        </button>
                        <i class="bi bi-chevron-right text-muted text-end"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <TabComponent tabs={tabs} className="tabs-component" />
    </div>
  );
};

export default Usage;
