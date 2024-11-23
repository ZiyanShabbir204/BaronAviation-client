import { sidebarItems } from "@/data/dashboard";
import { Link, useLocation } from "react-router-dom";

import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/contexts/auth.context";

export default function Sidebar({ setSideBarOpen }) {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  const sidebarItems = useMemo(() => {
    const defaultItems = [
      {
        id: 3,
        href: "/my-booking",
        iconClass: "icon-calendar text-26",
        label: "My Booking",
      },
      {
        id: 7,
        href: "/my-profile",
        iconClass: "icon-account text-26",
        label: "My Profile",
      },
      {
        id: 8,
        href: "/logout",
        clickEvent: logout,
        iconClass: "icon-logout text-26",
        label: "Logout",
      },
    ];

    if (user?.role === "cooperate_customer") {
      defaultItems.unshift(
        {
          id: 1,
          href: "/dashboard",
          iconClass: "icon-dashboard text-26",
          label: "Dashboard",
        },
        {
          id: 2,
          href: "/book-flight",
          iconClass: "icon-pin text-26",
          label: "Book Flight",
        }
      );
    }

    return defaultItems;
  }, [user?.role]);

  return (
    <div className="dashboard__sidebar js-dashboard-sidebar">
      <div className="dashboard__sidebar_header">
        <span
          onClick={() => setSideBarOpen(false)}
          class="text-white closeSidebar"
        >
          &times;
        </span>
        <div className="dashboard-sidebar-logo-wrapper">
          <Link to="/" className="baron-logo">
            <img src="/img/hero/3/logo.PNG" alt="logo icon" />
          </Link>
          <Link to="/" className="baron-text">
            <img src="/img/hero/3/logo-text-1.png" alt="logo icon" />
          </Link>
        </div>
      </div>

      <div className="sidebar -dashboard">
        {sidebarItems.map((elm, i) => (
          <div
            key={i}
            className={`sidebar__item ${
              pathname == elm.href ? "-is-active" : ""
            } `}
          >
            <Link to={elm.href}>
              <i className={elm.iconClass + " text-gradient-vivid-orange"}></i>
              <span className="ml-10 text-gradient-vivid-orange ">
                {elm.label}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
