import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
import ChangePassword from "./ChangePassword";
import { useActionData } from "react-router-dom";
import { useAuth } from "@/contexts/auth.context";
import UpdateProfile from "./UpdateProfile";

export default function Profile() {
  const { user } = useAuth();
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, newOldPassword] = useState();
  const [confirmPassword, confirmOldPassword] = useState();

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
            <h1 className="text-30">My Profile</h1>
            <UpdateProfile />

            <div className="rounded-12 bg-dark-grey shadow-2 px-40 pt-40 pb-30 mt-30">
              <ChangePassword />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
