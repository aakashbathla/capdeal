import React from "react";
import ProfileImg from "../../assets/profile_av.jpg";
import "./SideNav.css";

const SideNav = () => {
  return (
    <aside id="leftsidebar" className="sidebar">
      <div className="menu">
        <ul className="list">
          <li>
            <div className="user-info">
              <div className="image">
                <a href="#">
                  <img src={ProfileImg} alt="User" />
                </a>
              </div>
              <div className="detail">
                <h4>Michael</h4>
                <small>Agent</small>
              </div>
              <a href="#" title="Events">
                <i className="zmdi zmdi-calendar"></i>
              </a>
              <a href="#" title="Inbox">
                <i className="zmdi zmdi-email"></i>
              </a>
              <a href="#" title="Contact List">
                <i className="zmdi zmdi-account-box-phone"></i>
              </a>
              <a href="#" title="Chat App">
                <i className="zmdi zmdi-comments"></i>
              </a>
              <a href="#" title="Sign out">
                <i className="zmdi zmdi-power"></i>
              </a>
            </div>
          </li>
          <li className="active open">
            <a href="#">
              <i className="zmdi zmdi-home"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="zmdi zmdi-accounts-outline"></i>
              <span>User List</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
