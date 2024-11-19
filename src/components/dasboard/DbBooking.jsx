import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
// import Pagination from "../common/Pagination";
// import { bookingData } from "@/data/dashboard";
import Datagrid from "./my-booking/Datagrid";

const tabs = ["Approve", "Pending", "Declined"];
export default function DbBooking() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [currentTab, setcurrentTab] = useState("Approve");
  return (
    <div
      className={`dashboard ${
        sideBarOpen ? "-is-sidebar-visible" : ""
      } js-dashboard`}
    >
      <Sidebar setSideBarOpen={setSideBarOpen} />

      <div className="dashboard__content">
        <Header setSideBarOpen={setSideBarOpen} />

        <div className="dashboard__content_content">
          <h1 className="text-30">My Booking</h1>

          <div className="rounded-12 bg-dark-grey shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:mb-20 mt-60">
            <div className="tabs -underline-2 js-tabs">
              <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
                {tabs.map((elm, i) => (
                  <div
                    key={i}
                    className="col-auto"
                    onClick={() => setcurrentTab(elm)}
                  >
                    <button
                      className={`tabs__button text-20 lh-12 fw-500 pb-15 lg:pb-0 js-tabs-button ${
                        elm == currentTab ? "is-tab-el-active" : ""
                      }`}
                    >
                      {elm}
                    </button>
                  </div>
                ))}
              </div>
              <Datagrid status={currentTab.toLowerCase()}/>

             
            </div>
          </div>

          <div className="text-center pt-30">
            © COPYRIGHT THE BARON AVIATION {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
}
