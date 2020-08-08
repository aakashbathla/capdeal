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
          <SubMenu
            title="Customer"
            icon={<i className="zmdi zmdi-accounts"></i>}
          >
            <MenuItem>
              <Link to="/app/customer-list">Customer Listings</Link>
            </MenuItem>
            <MenuItem>Add Customer</MenuItem>
            <MenuItem>Update Customer</MenuItem>
            <MenuItem>Delete Customer</MenuItem>
          </SubMenu>
          <SubMenu
            title="Agents"
            icon={<i className="zmdi zmdi-accounts-outline"></i>}
          >
            <MenuItem>
              <Link to="/app/agents-list">Agents Listings</Link>
            </MenuItem>
            <MenuItem>Add Agents</MenuItem>
            <MenuItem>Update Agents</MenuItem>
            <MenuItem>Delete Agents</MenuItem>
          </SubMenu>
          <SubMenu title="Property" icon={<i className="zmdi zmdi-city"></i>}>
            <MenuItem>
              <Link to="/app/property-list">Property List</Link>
            </MenuItem>
            <MenuItem>Add Property</MenuItem>
            <MenuItem>Update Property</MenuItem>
            <MenuItem>Delete Property</MenuItem>
          </SubMenu>
          <SubMenu
            title="Project"
            icon={<i className="zmdi zmdi-city-alt"></i>}
          >
            <MenuItem>Add Property</MenuItem>
            <MenuItem>Update Property</MenuItem>
            <MenuItem>Delete Property</MenuItem>
          </SubMenu>
          <SubMenu title="SEO" icon={<i className="zmdi zmdi-code"></i>}>
            <MenuItem>Home Page</MenuItem>
            <MenuItem>Property Page</MenuItem>
            <MenuItem>Property Detail Page</MenuItem>
            <MenuItem>About Us Page</MenuItem>
            <MenuItem>Contact Us Page</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </aside>
  );
};

export default SideNav;
