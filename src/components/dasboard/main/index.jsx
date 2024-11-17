import React, { useState } from "react";
import Sidebar from "../Sidebar";
import States from "./States";
import Activities from "./Activities";
import Statistics from "./Statistics";
import Header from "../Header";
import FlightRequestMenu from "@/components/flightRequest/FlightRequestMenu";
import DashboardFlightRequest from "@/components/dashboardFlightRequest/DashboardFlightRequest";

export default function DBMain() {
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
            <h1 className="text-30">Dashboard</h1>
            <States />

            <div className="row pt-30 y-gap-30">
              <div>
                <DashboardFlightRequest />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
