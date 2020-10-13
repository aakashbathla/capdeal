import React from "react";
import { useHistory } from "react-router";
import "./UserProfile.scss";

const UserProfile = () => {
  const history = useHistory();
  const goToEditLink = () => {
    history.push({
      pathname: `/user/profile-edit`,
    });
  };
  return (
    <div className="user-profile">
      <div className="row">
        <div className="col-12 col-md-6">
          <h2>Profile Details</h2>
        </div>
        <div className="col-12 col-md-6 text-right">
          <button
            className="btn btn-round"
            title="Edit Profile"
            onClick={() => {
              goToEditLink();
            }}
          >
            <i className="zmdi zmdi-edit"></i>
          </button>
        </div>
      </div>
      <hr className="mb-4 pb-3" />
      <div className="row user-profile_content">
        <div className="col-12 col-md-6 mb-4">
          <label>Name</label>
          <h3>Prithvi Raj Chauhan</h3>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <label>Email Id</label>
          <h3>hostages@gmail.com</h3>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <label>Conact No.</label>
          <h3>9812345670</h3>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <label>Alternate No.</label>
          <h3>9971295137</h3>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <label>Address</label>
          <h3>123, Sector - 18</h3>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <label>City</label>
          <h3>Gurugram</h3>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <label>State</label>
          <h3>Haryana</h3>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
