import React from "react";
import Anchor from "components/atoms/Anchor/Anchor";
import ProfileImg from "assets/profile_av.jpg";
import "./SideNav.css";

const SideNav = () => {
  return (
    <aside id="leftsidebar" className="sidebar">
      <div className="menu">
        <ul className="list">
          <li>
            <div className="user-info">
              <div className="image"><Anchor to="#"><img src={ProfileImg} alt="User" /></Anchor></div>
              <div className="detail">
                <h4>Michael</h4>
                <small>Agent</small>
              </div>
              <Anchor to="#" title="Events"><i className="zmdi zmdi-calendar"></i></Anchor>
              <Anchor to="#" title="Inbox"><i className="zmdi zmdi-email"></i></Anchor>
              <Anchor to="#" title="Contact List"><i className="zmdi zmdi-account-box-phone"></i></Anchor>
              <Anchor to="#" title="Chat App"><i className="zmdi zmdi-comments"></i></Anchor>
              <Anchor to="#" title="Sign out"><i className="zmdi zmdi-power"></i></Anchor>
            </div>
          </li>
          <li className="active open">
            <Anchor to="#"><i className="zmdi zmdi-home"></i><span>Dashboard</span></Anchor>
          </li>
          <li>
            <Anchor to="#"><i className="zmdi zmdi-accounts-outline"></i><span>User List</span></Anchor>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
