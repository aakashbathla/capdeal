/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import ProfileImg from "assets/profile_av.jpg";
import "./SideNav.css";

const SideNav = () => {
  return (
    <aside id="leftsidebar" className="sidebar">
      <ProSidebar>
        <div className="user-info">
          <div className="image">
            <a href="#">
              <img src={ProfileImg} alt="User" />
            </a>
          </div>
          <div className="detail">
            <h4>Michael</h4>
            <small>Admin</small>
          </div>
        </div>
        <Menu iconShape="square">
          <MenuItem icon={<i className="zmdi zmdi-home"></i>}>
            Dashboard
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-accounts"></i>}>
            <Link to="/app/customer-list">Customers</Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-accounts-outline"></i>}>
            <Link to="/app/team-list">Team</Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-city"></i>}>
            <Link to="/app/property-list">Property List</Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-city"></i>}>
            <Link to="/app/developer-list">Developer List</Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-code"></i>}>SEO</MenuItem>
        </Menu>
      </ProSidebar>
    </aside>
  );
};

export default SideNav;
