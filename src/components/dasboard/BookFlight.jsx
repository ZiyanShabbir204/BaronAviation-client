import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
import DashboardFlightRequest from "../dashboardFlightRequest/DashboardFlightRequest";

export default function BookFlight() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  
  return (
    <>
      <div
        className={`dashboard ${
          sideBarOpen ? "-is-sidebar-visible" : ""
        } js-dashboard`}
      >
        <Sidebar setSideBarOpen={setSideBarOpen} />

        <div className="dashboard__content">
          <Header setSideBarOpen={setSideBarOpen} />

          <div className="dashboard__content_content">
            <DashboardFlightRequest/>
          </div>
        </div>
      </div>
    </>
  );
}
