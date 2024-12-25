import React, { useState } from "react";
import Sidebar from "../Sidebar";
import States from "./States";
import Activities from "./Activities";
import Statistics from "./Statistics";
import Header from "../Header";
import FlightRequestMenu from "@/components/flightRequest/FlightRequestMenu";
import DashboardFlightRequest from "@/components/dashboardFlightRequest/DashboardFlightRequest";
import DashboardGrid from "../DashboardGrid";
import useWindowSize from "@/hooks/useWindowSize";

export default function DBMain() {
  const { width } = useWindowSize();
  const [sideBarOpen, setSideBarOpen] = useState(width > 1024);
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
            <div className="rounded-12 bg-dark-grey shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:mb-20 mt-60">
              <div className="tabs -underline-2 js-tabs">
                <DashboardGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
