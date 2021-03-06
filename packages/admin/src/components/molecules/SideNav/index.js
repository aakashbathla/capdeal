/* eslint-disable */
import React from "react";
import { NavLink as Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import ProfileImg from "assets/profile.png";
import { getLocalstorageData } from "utils/Utils";
import "./SideNav.css";

const SideNav = () => {
  let userProfile = getLocalstorageData();
  userProfile = JSON.parse(userProfile);
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
            <h4>{userProfile.name || "Team Member"}</h4>
            <small>{userProfile.role}</small>
          </div>
        </div>
        <Menu iconShape="square">
          <MenuItem icon={<i className="zmdi zmdi-accounts"></i>}>
            <Link activeStyle={{ fontWeight: "800" }} to="/app/customer-list">
              Customers
            </Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-accounts-outline"></i>}>
            <Link activeStyle={{ fontWeight: "800" }} to="/app/team-list">
              Team
            </Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-balance"></i>}>
            <Link activeStyle={{ fontWeight: "800" }} to="/app/property-list">
              Property
            </Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-city"></i>}>
            <Link activeStyle={{ fontWeight: "800" }} to="/app/developer-list">
              Developer
            </Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-city-alt"></i>}>
            <Link activeStyle={{ fontWeight: "800" }} to="/app/project-list">
              Project
            </Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-city-alt"></i>}>
            <Link activeStyle={{ fontWeight: "800" }} to="/app/aminities-list">
              Aminities Category
            </Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-code"></i>}>
            <Link activeStyle={{ fontWeight: "800" }} to="/app/seo-list">
              SEO
            </Link>
          </MenuItem>
          <MenuItem icon={<i className="zmdi zmdi-code"></i>}>
            <Link activeStyle={{ fontWeight: "800" }} to="/app/contact-us">
              Contact Us
            </Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </aside>
  );
};

export default SideNav;
