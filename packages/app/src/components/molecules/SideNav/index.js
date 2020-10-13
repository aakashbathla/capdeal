/* eslint-disable */
import React from "react";
import { NavLink as Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/scss/styles.scss';
import ProfileImg from "assets/profile.png";
import "./SideNav.scss";

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
            <h4>Team Member</h4>
          </div>
        </div>
        <Menu iconShape="square">
          <MenuItem icon={<i className="zmdi zmdi-account"></i>}>
            <Link activeStyle={{ fontWeight: "800" }} to="/user/profile">
              Profile
            </Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-city"></i>}>
            <Link activeStyle={{ fontWeight: "800" }} to="/user/projects">
              Projects
            </Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-balance"></i>}>
            <Link activeStyle={{ fontWeight: "800" }} to="/user/property-list">
              Listed Properties
            </Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </aside>
  );
};

export default SideNav;
