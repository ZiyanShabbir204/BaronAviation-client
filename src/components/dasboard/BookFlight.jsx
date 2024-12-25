import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
import DashboardFlightRequest from "../dashboardFlightRequest/DashboardFlightRequest";
import useWindowSize from "@/hooks/useWindowSize";

export default function BookFlight() {
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
            <DashboardFlightRequest />
          </div>
        </div>
      </div>
    </>
  );
}
