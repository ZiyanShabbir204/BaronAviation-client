import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
import ChangePassword from "./ChangePassword";

export default function Profile() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [oldPassword,setOldPassword] = useState()
  const [newPassword,newOldPassword] = useState()
  const [confirmPassword,confirmOldPassword] = useState()

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
            <div className="mt-50 rounded-12 bg-dark-grey shadow-2 px-40 pt-40 pb-30">
              <h5 className="text-20 fw-500 mb-30">Profile Details</h5>

              <div className="contactForm row y-gap-30">
                <div className="col-md-6">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">Name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">Phone</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">Email</label>
                  </div>
                </div>
              </div>

              <div className="row  pt-30">
                <div className="col-12">
                  <button className="button -md button-gradient text-white">
                    Save Changes
                    <i className="icon-arrow-top-right text-16 ml-10"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-12 bg-dark-grey shadow-2 px-40 pt-40 pb-30 mt-30">
              <ChangePassword/>

          
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
